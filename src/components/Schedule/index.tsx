import { useNavigate } from "react-router-dom";
import { DivBox, ClassBox  } from '../utils/stylesBox';
import { BodyContainer, ButtonLabel, Container, Inputs, DivHeader, } from "../utils/styles";

export function MainSchedule() {
    const navigate = useNavigate()

    const newSchedule = () => {
        navigate('/NewSchedule')
    }
    return(
        <>
        <DivHeader>
            <h1>{'Agendamentos'}</h1>
        </DivHeader>
        <Container>
        <ClassBox>
        <DivBox>
            <h2>3</h2>
            <h3>Confirmados</h3>
        </DivBox>
        <DivBox>
            <h2>2</h2>
            <h3>Pendentes</h3>
        </DivBox>
        <DivBox>
            <h2>0</h2>
            <h3>Hoje</h3>
        </DivBox>
        <DivBox>
            <h2>4</h2>
            <h3>Total</h3>
        </DivBox>
        </ClassBox>
        </Container>
        <Container>
            <DivBox>
                 <DivBox onClick={newSchedule} >
            <h2>
                Criar novo agendamento
            </h2>
            <ButtonLabel>Vamos lá!</ButtonLabel>
        </DivBox>
            </DivBox>
        </Container>
        </>

    )
}