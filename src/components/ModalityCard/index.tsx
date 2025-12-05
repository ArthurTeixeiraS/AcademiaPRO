import { useNavigate } from "react-router-dom";
import { RoundedCard } from "../RoundedCard";
import { ButtonLabel, ButtonRow } from "../utils/styleButton";
import { CardInfo } from "../utils/CardStyles";
import type { ModalidadeResponse } from "../../@types/modality";

type ModalityCardProps = {
  modalities: ModalidadeResponse[];
  onDelete: (id: string) => void;
};

export function ModalityCard({ modalities, onDelete }: ModalityCardProps) {
  const navigate = useNavigate();

  const formatDescricao = (descricao: string | null): string => {
    if (!descricao) return "-";
    return descricao.length > 80
      ? `${descricao.substring(0, 80)}...`
      : descricao;
  };


  const formatDuracao = (duracao: number | null): string =>
    duracao != null && !Number.isNaN(duracao)
      ? `${duracao} min`
      : "-";

  const formatCapacidade = (capacidade: number | null): string =>
    capacidade != null && !Number.isNaN(capacidade)
      ? `${capacidade} pessoa(s)`
      : "-";

  if (!modalities || modalities.length === 0) {
    return <p>Nenhuma modalidade cadastrada.</p>;
  }

  return (
    <>
      {modalities.map((modality) => (
        <RoundedCard
          key={modality.id}
          width="32rem"
          height="23rem"
          isLarge={false}
        >
          <h2>{modality.nome}</h2>

          <CardInfo>
            <span>✏️</span>
            <p className="card-text" title={modality.descricao ?? undefined}>
              {formatDescricao(modality.descricao)}
            </p>
          </CardInfo>

          <CardInfo>
            <span>⏱</span> Duração: {formatDuracao(modality.duracao)}
          </CardInfo>

          <CardInfo>
            <span>👥</span> Capacidade: {formatCapacidade(modality.capacidade)}
          </CardInfo>

          <ButtonRow>
            <ButtonLabel
              onClick={() => navigate(`/EditModality/${modality.id}`)}
            >
              Editar
            </ButtonLabel>
            <ButtonLabel
              $variant="danger"
              onClick={() => onDelete(modality.id)}
            >
              Excluir
            </ButtonLabel>
          </ButtonRow>
        </RoundedCard>
      ))}
    </>
  );
}