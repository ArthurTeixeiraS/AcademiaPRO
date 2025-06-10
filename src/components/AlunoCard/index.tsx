import { useNavigate } from "react-router-dom";
import { CardInfo, ButtonRow } from "./styles";
import { RoundedCard } from "../RoundedCard";
import { ButtonLabel } from "../utils/styleButton";
import { getCustomersFromLocalStorage } from "../utils/localStorageUtils";

export function CustomerCard() {
    const customers = getCustomersFromLocalStorage()
    const navigate = useNavigate();

    const formatPlano = (plano: string): string => {
        switch (plano.toLowerCase()) {
            case 'basico':
                return 'Básico';
            case 'premium':
                return 'Premium';
            default:
                return plano;
        }
    };
    return (
        <>
            {customers.map((customer) => (
                <RoundedCard width="30rem" height="22rem" key={customer.id} isLarge={false}>
                    <div>
                        <h2>{customer.nome}</h2>
                    </div>  

                    <CardInfo>
                        <span>📧</span> 
                        {customer.email}
                    </CardInfo>
                    <CardInfo>
                        <span>📞</span> 
                        {customer.telefone}
                    </CardInfo>
                    <CardInfo>
                        <span>📅</span> 
                        Matrícula: <strong>{formatPlano(customer.plano)}</strong>
                    </CardInfo>

                    <ButtonRow>
                        <ButtonLabel onClick={() => navigate(`/EditCustomer/${customer.id}`)}>Editar</ButtonLabel>
                    </ButtonRow>
                </RoundedCard>
            ))}
        </>
    )
}