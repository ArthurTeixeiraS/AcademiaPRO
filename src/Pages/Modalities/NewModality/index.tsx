import { useState } from "react";
import { AlertToast } from "../../../components/Alerts/AlertToast";
import { RoundedCard } from "../../../components/RoundedCard";
import { SideMenu } from "../../../components/SideMenu";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";

import type { ModalidadeForm } from "../../../@types/modality";
import { criarModalidade } from "../../../services/modalityService";

import { useNavigate } from "react-router-dom";



export function NewModality() {
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

  const navigate = useNavigate();

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

    try {
      await criarModalidade(formData);
      setToast({
        message: "Modalidade cadastrada com sucesso!",
        type: "success",
      });

      setTimeout(() => {
        navigate("/modalities");
      }, 1500);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Erro ao cadastrar modalidade.";
      setToast({ message, type: "error" });
    }
  };

  return (
    <>
      <SideMenu />
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="50rem">
          <Form onSubmit={handleSubmit}>
            <h1>Cadastrar Nova Modalidade</h1>

            <label>Nome da Modalidade</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome da modalidade."
              required
              autoComplete="off"
            />

            <label>Descrição</label>
            <textarea
              name="descricao"
              value={formData.descricao ?? ""}
              onChange={handleChange}
              placeholder="Digite a descrição."
              required
            />

            <label>Duração (minutos)</label>
            <input
              type="number"
              name="duracao"
              value={formData.duracao}
              onChange={handleChange}
              placeholder="Informe a duração da aula."
              required
              min={1}
            />

            <label>Capacidade (pessoas)</label>
            <input
              type="number"
              name="capacidade"
              value={formData.capacidade}
              onChange={handleChange}
              placeholder="Digite a capacidade."
              required
              min={1}
            />

            <ButtonGroup className="multipleButtons">
              <ButtonLabel type="submit">Salvar</ButtonLabel>
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
