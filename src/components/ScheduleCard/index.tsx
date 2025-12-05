// Card para listar, editar ou excluir agendamentos
import { useEffect, useState } from "react";
import type { AgendamentoResponse } from "../../@types/schedule";
import { RoundedCard } from "../RoundedCard";
import { CardInfo } from "../utils/CardStyles";
import { ButtonLabel, ButtonRow } from "../utils/styleButton";
import { useNavigate } from "react-router-dom";
import { AlertToast } from "../Alerts/AlertToast";
import { AlertConfirm } from "../Alerts/AlertConfirm";
import {
  listarAgendamentos,
  excluirAgendamento,
} from "../../services/scheduleService";

// Funções auxiliares de formatação
function formatarData(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("pt-BR");
}

function formatarHora(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Estado principal
export function ScheduleCard() {
  const [schedules, setSchedules] = useState<AgendamentoResponse[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Carrega agendamentos da API na montagem
  useEffect(() => {
    const loadSchedules = async () => {
      try {
        setIsLoading(true);
        const page = await listarAgendamentos(0, 10);
        setSchedules(page.content);
      } catch (error) {
        console.error("Erro ao carregar agendamentos:", error);
        setToast({
          message: "Erro ao carregar agendamentos",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadSchedules();
  }, []);

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await excluirAgendamento(selectedId);
      setSchedules((prev) => prev.filter((schedule) => schedule.id !== selectedId));
      setToast({
        message: "Agendamento removido com sucesso",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setToast({
        message: "Erro ao remover agendamento",
        type: "error",
      });
    }

    setShowConfirm(false);
    setSelectedId(null);
  };

  if (isLoading) return <div>Carregando agendamentos...</div>;

  // Render
  return (
    <>
      {schedules.map((schedule, index) => (
        <RoundedCard key={schedule.id} width="32rem" height="25rem" isLarge={false}>
          <h2>Agendamento {index + 1}</h2>

          <CardInfo>
            <span>📅</span> {formatarData(schedule.data)}
          </CardInfo>

          <CardInfo>
            <span>⏰</span> {formatarHora(schedule.data)}
          </CardInfo>

          <CardInfo>
            <span>🏃‍➡️</span> Modalidade: {schedule.modalidadeNome ?? "Não Informado."}
          </CardInfo>

          <CardInfo>
            <span>👤</span> Aluno: {schedule.alunoNome ?? "Não Informado."}
          </CardInfo>

          <ButtonRow>
            <ButtonLabel onClick={() => navigate(`/EditSchedule/${schedule.id}`)}>
              Editar
            </ButtonLabel>
            <ButtonLabel
              $variant="danger"
              onClick={() => {
                confirmDelete(schedule.id);
              }}
            >
              Excluir
            </ButtonLabel>
          </ButtonRow>
        </RoundedCard>
      ))}

      {showConfirm && (
        <AlertConfirm
          message="Tem certeza que deseja excluir este agendamento?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}

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
