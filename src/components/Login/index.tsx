
import { useNavigate } from 'react-router-dom';
import { DivLogin,MenuTitle, ExtraContainer} from './styles';
import {Inputs, ButtonLabel} from '../utils/styles'
import { useState } from 'react';


export function LoginForm() {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/Dashboard')
    }

    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
            <MenuTitle>
                <h1>{'Seja bem vindo(a) ao'}</h1>
                <p>AcademiaPRO</p>
            </MenuTitle>
            <DivLogin onSubmit={handleLogin}>  
                <h2>Acesse:</h2>
                <Inputs required placeholder='Usuário'></Inputs>
                <Inputs 
                    required 
                    placeholder='Senha' 
                    type={showPassword ? 'text' : 'password'}
                    id='passwordInput'>
                </Inputs>
                <ExtraContainer className="extraContainer">
                    <input 
                        type="checkbox" 
                        name="showPassword"
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="showPassword">Exibir senha</label>
                </ExtraContainer>
                <ButtonLabel type='submit'>Acessar</ButtonLabel>
            </DivLogin>
        </>
    )
}