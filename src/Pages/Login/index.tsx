
import { useNavigate } from 'react-router-dom';
import { MenuTitle, ExtraContainer,LoginConfigForm, LeftContainer, RightContainer,LoginPageContainer,FormContainer} from './styles';
import { ButtonGroup, ButtonLabel} from '../../components/utils/styleButton';
import { useState } from 'react';

export function Login() {
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if(username.trim()){
            localStorage.setItem('username', username.trim())
            navigate('/Dashboard')
        }
    }
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return(
    <LoginPageContainer>
      <LeftContainer>
        <FormContainer onSubmit={handleLogin}>
            <MenuTitle>
                <h1>{'Seja bem vindo(a) ao'}</h1>
                <p>AcademiaPRO</p>
            </MenuTitle>
            <LoginConfigForm>
                <h2>Acesse:</h2>
                <input 
                        required 
                        placeholder='Usuário'
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'/>
                <input 
                    required 
                    placeholder='Senha' 
                    type={showPassword ? 'text' : 'password'}
                    id='passwordInput'/>
                    
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
        </FormContainer>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </LoginPageContainer>
    )
}