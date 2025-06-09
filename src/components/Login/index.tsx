
import { useNavigate } from 'react-router-dom';
import { MenuTitle, ExtraContainer, LoginConfigForm} from './styles';
import { ButtonGroup, ButtonLabel} from '../utils/styleButton'
import { useState } from 'react';
import { BackGroundContainer, Form } from '../utils/generic';

export function LoginForm() {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/Dashboard')
    }

    const [showPassword, setShowPassword] = useState(false);

    return(
        <BackGroundContainer>
            <MenuTitle>
                <h1>{'Seja bem vindo(a) ao'}</h1>
                <p>AcademiaPRO</p>
            </MenuTitle>
            <Form onSubmit={handleLogin}>  
                <LoginConfigForm>
                    <h2>Acesse:</h2>
                    <input 
                        required 
                        placeholder='Usuário'
                        type='text'>
                    </input>
                    <input 
                        required 
                        placeholder='Senha' 
                        type={showPassword ? 'text' : 'password'}
                        id='passwordInput'>
                    </input>
                    <ExtraContainer className="extraContainer">
                        <input 
                            type="checkbox" 
                            name="showPassword"
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label className='showPassword' htmlFor="showPassword">Exibir senha</label>
                    </ExtraContainer>
                    <ButtonGroup>
                        <ButtonLabel type='submit'>Acessar</ButtonLabel>
                    </ButtonGroup>
                </LoginConfigForm>
            </Form>
        </BackGroundContainer>
    )
}