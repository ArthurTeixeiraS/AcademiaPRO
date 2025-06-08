import { useNavigate } from "react-router-dom";
import style from 'styled-components';
import { DivHeader , Container, ButtonLabel} from '../utils/styles';
import { BoxUser, DivBox } from "../utils/stylesBox";

export function User() {

    const navigate = useNavigate()
    const newUser = () => {
        navigate('/NewUser')
    }
    return(
        <>
      <DivHeader>
            <h1>{'Alunos'}</h1>
        </DivHeader>
        <Container>
            <BoxUser text-align = 'left'>
            <h2>teste maria de lourdes</h2>
            </BoxUser>
                        <BoxUser text-align = 'left'>
            <h2>teste maria de lourdes</h2>
            </BoxUser>
                        <BoxUser text-align = 'left'>
            <h2>teste maria de lourdes</h2>
            </BoxUser>
                        <BoxUser text-align = 'left'>
            <h2>teste maria de lourdes</h2>
            </BoxUser>
        </Container>
        </>
    )
}