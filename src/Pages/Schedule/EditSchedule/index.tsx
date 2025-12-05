import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SideMenu } from "../../../components/SideMenu";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { RoundedCard } from "../../../components/RoundedCard";
import { AlertToast } from "../../../components/Alerts/AlertToast";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";

import { listarAlunos } from "../../../services/customerService";
import { listarModalidades } from "../../../services/modalityService";
import {
  buscarAgendamentoPorId,
  atualizarAgendamento,
} from "../../../services/scheduleService";

import type { AlunoResponse } from "../../../@types/customer";
import type { ModalidadeResponse } from "../../../@types/modality";

interface EditScheduleFormData {
  alunoId: string;
  modalidadeId: string;
  data: string;
  horario: string;
}

export function EditSchedule() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const [formData, setFormData] = useState<EditScheduleFormData>({
    alunoId: "",
    modalidadeId: "",
    data: "",
    horario: "",
  });

  const [alunos, setAlunos] = useState<AlunoResponse[]>([]);
  const [modalidades, setModalidades] = useState<ModalidadeResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const carregarDados = async () => {
      if (!id) {
        setToast({ message: "ID de agendamento inválido", type: "error" });
        return;
      }

      try {
        setIsLoading(true);
        setToast(null);

        const [alunosPage, modalidadesPage, agendamento] = await Promise.all([
          listarAlunos(0, 100),
          listarModalidades(0, 100),
          buscarAgendamentoPorId(id),
        ]);

        setAlunos(alunosPage.content);
        setModalidades(modalidadesPage.content);

        // Converter data ISO do backend em data + horário separados
        const iso = agendamento.data;
        const dataObj = new Date(iso);

        let data = "";
        let horario = "";

        if (!Number.isNaN(dataObj.getTime())) {
          const year = dataObj.getFullYear();
          const month = String(dataObj.getMonth() + 1).padStart(2, "0");
          const day = String(dataObj.getDate()).padStart(2, "0");
          data = `${year}-${month}-${day}`;

          const hours = String(dataObj.getHours()).padStart(2, "0");
          const minutes = String(dataObj.getMinutes()).padStart(2, "0");
          horario = `${hours}:${minutes}`;
        } else if (iso.includes("T")) {
          const [d, h] = iso.split("T");
          data = d;
          horario = h?.substring(0, 5) ?? "";
        }

        setFormData({
          alunoId: agendamento.alunoId,
          modalidadeId: agendamento.modalidadeId,
          data,
          horario,
        });
      } catch (error) {
        console.error(error);
        setToast({ message: "Erro ao carregar dados do agendamento", type: "error" });
      } finally {
        setIsLoading(false);
      }
    };

    carregarDados();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) {
      setToast({ message: "ID de agendamento inválido", type: "error" });
      return;
    }

    if (!formData.alunoId || !formData.modalidadeId || !formData.data || !formData.horario) {
      setToast({ message: "Preencha todos os campos!", type: "error" });
      return;
    }

    try {
      setIsLoading(true);
      setToast(null);

      const dataHoraIso = `${formData.data}T${formData.horario}:00`;

      await atualizarAgendamento(id, {
        data: dataHoraIso,
        alunoId: formData.alunoId,
        modalidadeId: formData.modalidadeId,
      });

      setToast({ message: "Agendamento atualizado com sucesso!", type: "success" });
      setTimeout(() => navigate("/Schedule"), 1500);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error ? error.message : "Erro ao atualizar agendamento";
      setToast({ message, type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !formData.data && !formData.horario && !formData.alunoId && !formData.modalidadeId) {
    return (
      <>
        <SideMenu />
        <FlexibleContentContainer>
          <div>Carregando...</div>
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
            <h1>Editar Agendamento</h1>

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
                {isLoading ? "Salvando..." : "Salvar Alterações"}
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