import { RoundedCard } from "../RoundedCard";
import { CardInfo } from "../utils/CardStyles";
import { ButtonLabel } from "../utils/styleButton";
import { Link } from "react-router-dom";

interface NewRegisterProps {
  entityName: string;       
  createPath: string;       
  buttonText: string;       
  cardWidth?: string;       
  cardHeight?: string;     
}

export function NewRegister({
  entityName,
  createPath,
  buttonText,
  cardWidth = "30rem",     
  cardHeight = "22rem",
}: NewRegisterProps) {
  return (
    <RoundedCard width={cardWidth} height={cardHeight} isLarge={false}>
      <div className="notFoundRegister">
        <h2>Não encontrou?</h2>
        <CardInfo>Cadastre um novo {entityName.toLowerCase()}!</CardInfo>
        <Link to={createPath}>
          <ButtonLabel className="margin">{buttonText}</ButtonLabel>
        </Link>
      </div>
    </RoundedCard>
  );
}
