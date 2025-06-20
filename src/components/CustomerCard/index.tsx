import { useNavigate } from "react-router-dom";
import { CardInfo } from "../utils/CardStyles";
import { RoundedCard } from "../RoundedCard";
import { ButtonLabel, ButtonRow } from "../utils/styleButton";
import type { CustomersStorage } from "../../@types/customer";

type CustomerCardProps = {
  customers: CustomersStorage;
  onDelete: (id: string) => void;
};

export function CustomerCard({ customers, onDelete }: CustomerCardProps) {
  const navigate = useNavigate();

  const formatPlano = (plano: string): string => {
    switch (plano.toLowerCase()) {
      case "basico":
        return "Básico";
      case "premium":
        return "Premium";
      default:
        return plano;
    }
  };

  return (
    <>
      {customers.map((customer) => (
        <RoundedCard width="32rem" height="22rem" key={customer.id} isLarge={false}>
          <div>
            <h2>{customer.nome}</h2>
          </div>

          <CardInfo><span>📧</span>{customer.email}</CardInfo>
          <CardInfo><span>📞</span>{customer.telefone}</CardInfo>
          <CardInfo><span>📅</span>Matrícula: <strong>{formatPlano(customer.plano)}</strong></CardInfo>

          <ButtonRow>
            <ButtonLabel onClick={() => navigate(`/EditCustomer/${customer.id}`)}>Editar</ButtonLabel>
            <ButtonLabel $variant="danger" onClick={() => onDelete(customer.id)}>Excluir</ButtonLabel>
          </ButtonRow>
        </RoundedCard>
      ))}
    </>
  );
}
