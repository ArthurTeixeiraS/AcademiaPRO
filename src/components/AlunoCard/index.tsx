import { useNavigate } from "react-router-dom";
import { ButtonLabel } from "../Login/styles";
import { CardInfo, ButtonRow } from "./styles";
import { alunos } from "../../@types/aluno";
import { RoundedCard } from "../RoundedCard";

export function AlunosCard() {
    const navigate = useNavigate();
    return (
        <>
            {alunos.map((aluno) => (
                <RoundedCard width="30rem" height="22rem" key={aluno.id}>
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
                        <ButtonLabel onClick={() => navigate(`/EditUser/${aluno.id}`)}>Editar</ButtonLabel>
                    </ButtonRow>
                </RoundedCard>
            ))}
        </>
    )
}