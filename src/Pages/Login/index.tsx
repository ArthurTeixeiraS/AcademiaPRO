
import { useNavigate } from 'react-router-dom';
import { MenuTitle, ExtraContainer,LoginConfigForm, LeftContainer, RightContainer,LoginPageContainer,FormContainer} from './styles';
import { ButtonGroup, ButtonLabel} from '../../components/utils/styleButton';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export function Login() {
    const navigate = useNavigate()
    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!username.trim() || !password) {
            setError('Informe usuário e senha.');
            return;
        }

        try {
            setLoading(true);
            await login(username, password);
            navigate('/Dashboard');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Erro ao realizar login.');
            }
        } finally {
            setLoading(false);
        }
    };

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
                    id='passwordInput'
                    onChange={(e) => setPassword(e.target.value)}
                />
                    
                <ExtraContainer className="extraContainer">
                        <input 
                            type="checkbox" 
                            name="showPassword"
                            onChange={() => setShowPassword((prev) => !prev)}
                        />
                        <label className='showPassword' htmlFor="showPassword">Exibir senha</label>
                </ExtraContainer>

                 {error && <h2 style={{ color: '#ff4d4f', textAlign: 'center'}}>{error}</h2>}

                <ButtonGroup>
                        <ButtonLabel type="submit" disabled={loading}>
                            {loading ? 'Entrando...' : 'Acessar'}
                        </ButtonLabel>
                </ButtonGroup>
            </LoginConfigForm>
        </FormContainer>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </LoginPageContainer>
    )
}