import { useNavigate } from "react-router-dom";
import { CardInfo, ButtonRow } from "./styles";
import { alunos } from "../../@types/aluno";
import { RoundedCard } from "../RoundedCard";
import { ButtonLabel } from "../utils/styleButton";

export function AlunosCard() {
    const navigate = useNavigate();
    return (
        <>
            {alunos.map((aluno) => (
                <RoundedCard width="30rem" height="22rem" key={aluno.id} isLarge={false}>
                    <div>
                        <h2>{aluno.nome}</h2>
                    </div>  

                    <CardInfo>
                        <span>📧</span> 
                        {aluno.email}
                    </CardInfo>
                    <CardInfo>
                        <span>📞</span> 
                        {aluno.telefone}
                    </CardInfo>
                    <CardInfo>
                        <span>📅</span> 
                        Matrícula: {aluno.matricula}
                    </CardInfo>
                    <CardInfo>
                        <strong>{aluno.plano}</strong>
                    </CardInfo>

                    <ButtonRow>
                        <ButtonLabel onClick={() => navigate(`/EditCustomer/${aluno.id}`)}>Editar</ButtonLabel>
                    </ButtonRow>
                </RoundedCard>
            ))}
        </>
    )
}