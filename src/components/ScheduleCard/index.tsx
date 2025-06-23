// Card para listar, editar ou excluir agendamentos
import { useEffect, useState } from "react";
import type { Schedule } from "../../@types/schedule";
import { RoundedCard } from "../RoundedCard";
import { CardInfo } from "../utils/CardStyles";
import { getSchedulesFromLocalStorage, removeScheduleFromLocalStorage } from "../utils/LocalStorage/ScheduleUtils";
import { ButtonLabel, ButtonRow } from "../utils/styleButton";
import { useNavigate } from "react-router-dom";
import { AlertToast } from "../Alerts/AlertToast";
import { AlertConfirm } from "../Alerts/AlertConfirm";


// Estado principal
export function ScheduleCard() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();

// Carrega todos os agendamentos do localStorage na montagem
  useEffect(() => {
      setSchedules(getSchedulesFromLocalStorage());
  }, []);

  // Preparar exclusão
  const confirmDelete = (id: string) => {
      setSelectedId(id);
      setShowConfirm(true);
    };
  

    // Executar exclusão + feedback 
    const handleDelete = () => {
      if (!selectedId) return;
  
      const success = removeScheduleFromLocalStorage(selectedId);
  
      if (success) {
        setToast({ message: "Agendamento removido com sucesso", type: "success" });
        setSchedules((prev) => prev.filter((schedule) => schedule.id !== selectedId));
      } else {
        setToast({ message: "Erro ao remover agendamento", type: "error" });
      }
  
      setShowConfirm(false);
      setSelectedId(null);
    };


    // Render
  return (
    <>
      {schedules.map((schedule, index) => (
        <RoundedCard key={schedule.id} width="32rem" height="25rem" isLarge={false}>
          <h2>Agendamento {index +1}</h2>
          <CardInfo>
            <span>📅</span> {(schedule.data)}
          </CardInfo>
          <CardInfo>
            <span>⏰</span> {(schedule.horario)}
          </CardInfo>
          <CardInfo>
            <span>🏃‍➡️</span> {schedule.modalidadeNome}
          </CardInfo>
          <CardInfo>
            <span>👤</span> {schedule.alunoNome}
          </CardInfo>

          <ButtonRow>
            <ButtonLabel onClick={() => navigate(`/EditSchedule/${schedule.id}`)}>Editar</ButtonLabel>
            <ButtonLabel $variant="danger" onClick={() => {confirmDelete(schedule.id)}}>Excluir</ButtonLabel>
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
