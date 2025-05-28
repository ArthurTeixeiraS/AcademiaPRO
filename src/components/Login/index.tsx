
import { DivLogin,MenuTitle, Inputs, ButtonLabel} from './styles';


export function LoginForm() {

    return(
        <>
            <MenuTitle>
                <h1>{'Seja bem vindo(a) ao'}</h1>
                <p>AcademiaPRO</p>
            </MenuTitle>
            <DivLogin>
                <h2>Acesse:</h2>
                <Inputs placeholder='Usuário'></Inputs>
                <Inputs placeholder='Senha' type='password'></Inputs>
                <ButtonLabel>Acessar</ButtonLabel>
            </DivLogin>
        </>
    )
}