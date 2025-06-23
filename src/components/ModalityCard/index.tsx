
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoundedCard } from "../RoundedCard";
import { ButtonLabel, ButtonRow } from "../utils/styleButton";
import { CardInfo } from "../utils/CardStyles";
import { getModalitiesFromLocalStorage, removeModalityFromLocalStorage } from "../utils/LocalStorage/ModalityUtils";
import { AlertConfirm } from "../Alerts/AlertConfirm";
import { AlertToast } from "../Alerts/AlertToast";
import type { Modality } from "../../@types/modality";


//componente principal
export function ModalityCard() {
  const [modalities, setModalities] = useState<Modality[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();


  
  // Carrega as modalidades salvas no localStorage
  useEffect(() => {
    setModalities(getModalitiesFromLocalStorage());
  }, []);

  // ───── HANDLERS DE EXCLUSÃO ─────
  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };



  const handleDelete = () => {
    if (!selectedId) return;

    const success = removeModalityFromLocalStorage(selectedId);

    if (success) {
      setToast({ message: "Modalidade removida com sucesso", type: "success" });
      setModalities((prev) => prev.filter((mod) => mod.id !== selectedId));
    } else {
      setToast({ message: "Erro ao remover modalidade", type: "error" });
    }

    setShowConfirm(false);
    setSelectedId(null);
  };


   // Formata o público-alvo para exibição
  const formatPublico = (publico: string): string => {
    switch (publico.toLowerCase()) {
      case "infantil":
        return "Infantil";
      case "adulto":
        return "Jovem-Adulto";
      default:
        return publico;
    }
  };



  //render
  return (
    <>
      {modalities.map((modality) => (
        <RoundedCard key={modality.id} width="32rem" height="23rem" isLarge={false}>
          <h2>{modality.nome}</h2>
          <CardInfo>
            <span>✏️</span> 
            <p
                className="card-text"
                title={modality.descricao}
            >
                {modality.descricao.length > 50 
                ? `${modality.descricao.substring(0, 50)}...` 
                : modality.descricao
                }
            </p>
          </CardInfo>
          <CardInfo>
            <span>👥</span> {modality.capacidade} Pessoa(as)
          </CardInfo>
          <CardInfo><span>📌</span> Público: {formatPublico(modality.publicoAlvo)}</CardInfo>

          <ButtonRow>
            <ButtonLabel onClick={() => navigate(`/EditModality/${modality.id}`)}>Editar</ButtonLabel>
            <ButtonLabel $variant="danger" onClick={() => confirmDelete(modality.id)}>Excluir</ButtonLabel>
          </ButtonRow>
        </RoundedCard>
      ))}

      {showConfirm && (
        <AlertConfirm
          message="Tem certeza que deseja excluir esta Modalidade?"
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
