import { useNavigate } from "react-router-dom";
import { CardInfo } from "../utils/CardStyles";
import { RoundedCard } from "../RoundedCard";
import { ButtonLabel, ButtonRow } from "../utils/styleButton";
import { getCustomersFromLocalStorage, removeCustomerFromLocalStorage } from "../utils/LocalStorage/CustomersUtils";

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
    const handleDelete = (id: string) => {
        if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
            const success = removeCustomerFromLocalStorage(id);
            if (success) {
                window.location.reload()
            } else {
                alert('Erro ao remover aluno.');
            }
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
                        <ButtonLabel onClick={() => navigate(`/EditCustomer/${customer.id}`)}>
                            Editar
                        </ButtonLabel>
                        <ButtonLabel 
                            $variant="danger"
                            onClick={() => {handleDelete(customer.id)}}>
                            Excluir
                        </ButtonLabel>
                    </ButtonRow>
                    
                </RoundedCard>
            ))}
        </>
    )
}