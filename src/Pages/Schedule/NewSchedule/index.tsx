import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/SideMenu";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { RoundedCard } from "../../../components/RoundedCard";
import { useNavigate } from "react-router-dom";
import { AlertToast } from "../../../components/Alerts/AlertToast";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";

import { listarAlunos } from "../../../services/customerService";
import { listarModalidades } from "../../../services/modalityService";
import { criarAgendamento } from "../../../services/scheduleService";

import type { AlunoResponse } from "../../../@types/customer";
import type { ModalidadeResponse } from "../../../@types/modality";

interface NewScheduleFormData {
  alunoId: string;
  modalidadeId: string;
  data: string;  
  horario: string;
}

export function NewSchedule() {
  const [formData, setFormData] = useState<NewScheduleFormData>({
    alunoId: "",
    modalidadeId: "",
    data: "",
    horario: "",
  });

  const [alunos, setAlunos] = useState<AlunoResponse[]>([]);
  const [modalidades, setModalidades] = useState<ModalidadeResponse[]>([]);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarDados = async () => {
      try {
        setIsLoading(true);
        setToast(null);

        const [alunosPage, modalidadesPage] = await Promise.all([
          listarAlunos(0, 100),
          listarModalidades(0, 100),
        ]);

        setAlunos(alunosPage.content);
        setModalidades(modalidadesPage.content);
      } catch (error) {
        console.error(error);
        setToast({ message: "Erro ao carregar dados", type: "error" });
      } finally {
        setIsLoading(false);
      }
    };

    carregarDados();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.alunoId || !formData.modalidadeId || !formData.data || !formData.horario) {
      setToast({ message: "Preencha todos os campos!", type: "error" });
      return;
    }

    try {
      setIsLoading(true);
      setToast(null);

      const dataHoraIso = `${formData.data}T${formData.horario}:00`;

      await criarAgendamento({
        data: dataHoraIso,
        alunoId: formData.alunoId,
        modalidadeId: formData.modalidadeId,
      });

      setToast({ message: "Agendamento criado com sucesso!", type: "success" });

      setTimeout(() => {
        navigate("/Schedule");
      }, 1500);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error ? error.message : "Erro ao criar agendamento";
      setToast({ message, type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && alunos.length === 0 && modalidades.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <SideMenu />
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="40rem">
          <Form onSubmit={handleSubmit}>
            <h1>Cadastrar Novo Agendamento</h1>

            <label htmlFor="alunoId">Aluno</label>
            <select
              name="alunoId"
              id="alunoId"
              value={formData.alunoId}
              onChange={handleChange}
              required
              disabled={isLoading}
            >
              <option value="">Selecione um aluno</option>
              {alunos.map((aluno) => (
                <option key={aluno.id} value={aluno.id}>
                  {aluno.nome}
                </option>
              ))}
            </select>

            <label htmlFor="modalidadeId">Modalidade</label>
            <select
              name="modalidadeId"
              id="modalidadeId"
              value={formData.modalidadeId}
              onChange={handleChange}
              required
              disabled={isLoading}
            >
              <option value="">Selecione uma modalidade</option>
              {modalidades.map((mod) => (
                <option key={mod.id} value={mod.id}>
                  {mod.nome}
                </option>
              ))}
            </select>

            <label htmlFor="data">Data</label>
            <input
              type="date"
              name="data"
              id="data"
              value={formData.data}
              onChange={handleChange}
              required
              disabled={isLoading}
            />

            <label htmlFor="horario">Horário</label>
            <input
              type="time"
              name="horario"
              id="horario"
              value={formData.horario}
              onChange={handleChange}
              required
              disabled={isLoading}
            />

            <ButtonGroup className="multipleButtons">
              <ButtonLabel type="submit" disabled={isLoading}>
                {isLoading ? "Salvando..." : "Salvar Agendamento"}
              </ButtonLabel>
              <ButtonLabel
                type="button"
                onClick={() => navigate("/Schedule")}
                disabled={isLoading}
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
