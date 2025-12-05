import { useEffect, useState } from "react";
import { RoundedCard } from "../../../components/RoundedCard";
import { SideMenu } from "../../../components/SideMenu";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";
import { AlertToast } from "../../../components/Alerts/AlertToast";

import type { ModalidadeForm, ModalidadeResponse } from "../../../@types/modality";
import {
  buscarModalidadePorId,
  atualizarModalidade,
} from "../../../services/modalityService";

import { useNavigate, useParams } from "react-router-dom";

export function EditModality() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [formData, setFormData] = useState<ModalidadeForm>({
    nome: "",
    descricao: "",
    duracao: 0,
    capacidade: 0,
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate("/modalities");
      return;
    }

    const carregarModalidade = async () => {
      try {
        const dados: ModalidadeResponse = await buscarModalidadePorId(id);

        setFormData({
          nome: dados.nome,
          descricao: dados.descricao ?? "",
          duracao: dados.duracao,
          capacidade: dados.capacidade,
        });
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Erro ao carregar modalidade.";
        setToast({ message, type: "error" });
        setTimeout(() => navigate("/modalities"), 1500);
      } finally {
        setLoading(false);
      }
    };

    void carregarModalidade();
  }, [id, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "duracao" || name === "capacidade" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nome.trim() ||
      !formData.descricao?.trim() ||
      !formData.duracao ||
      formData.duracao <= 0 ||
      !formData.capacidade ||
      formData.capacidade <= 0
    ) {
      setToast({
        message: "Preencha todos os campos obrigatórios!",
        type: "error",
      });
      return;
    }

    if (!id) return;

    try {
      await atualizarModalidade(id, formData);
      setToast({
        message: "Modalidade editada com sucesso!",
        type: "success",
      });
      setTimeout(() => navigate("/modalities"), 1500);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Erro ao atualizar modalidade.";
      setToast({ message, type: "error" });
    }
  };

  if (loading) {
    return (
      <>
        <SideMenu />
        <FlexibleContentContainer>
          <p>Carregando dados da modalidade...</p>
        </FlexibleContentContainer>
      </>
    );
  }

  return (
    <>
      <SideMenu />
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="40rem">
          <Form onSubmit={handleSubmit}>
            <h1>Editar Cadastro de Modalidade</h1>

            <div>
              <label htmlFor="nome">Nome da Modalidade</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite o nome da Modalidade."
                value={formData.nome}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="descricao">Descrição</label>
              <textarea
                name="descricao"
                placeholder="Digite a descrição da modalidade"
                value={formData.descricao ?? ""}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="duracao">Duração (minutos)</label>
              <input
                type="number"
                name="duracao"
                placeholder="Informe a duração da aula"
                value={formData.duracao}
                onChange={handleChange}
                required
                min={1}
              />
            </div>

            <div>
              <label htmlFor="capacidade">Capacidade (pessoas)</label>
              <input
                type="number"
                name="capacidade"
                placeholder="Selecione a capacidade de alunos da modalidade"
                value={formData.capacidade}
                onChange={handleChange}
                required
                min={1}
              />
            </div>

            <ButtonGroup className="multipleButtons">
              <ButtonLabel type="submit">Salvar Alterações</ButtonLabel>
              <ButtonLabel
                type="button"
                onClick={() => navigate("/modalities")}
              >
                Cancelar
              </ButtonLabel>
            </ButtonGroup>
          </Form>
        </RoundedCard>
      </FlexibleContentContainer>

      {toast && (
        <AlertToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}