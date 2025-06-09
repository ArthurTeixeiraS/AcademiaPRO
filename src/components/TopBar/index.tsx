import { FiSearch, FiSettings, FiBell, FiLock } from 'react-icons/fi';
import { 
    TopBarContainer, SearchWrapper, SearchInput,
    IconsWrapper, IconButton, NotificationBadge
 } from './styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  placeholder?: string;
}

// Revisar os componentes, pra ver se algo pode ser reutilizado
export function TopBar({placeholder= "Pesquisar..."}: Props) {
  const navigate = useNavigate();

  const backToLogin = () => {
      navigate('/')
  }
  return (
    <TopBarContainer>
        {/* Wrapper = "Agrupador" */}
      <SearchWrapper>
        <FiSearch size={20} />
        <SearchInput placeholder={placeholder} />
      </SearchWrapper>


      <IconsWrapper>
        <IconButton>
          <FiSettings size={20} />
        </IconButton>
        <IconButton>
          <FiBell size={20} />
          <NotificationBadge>+9</NotificationBadge>
        </IconButton>
        <IconButton>
          <FiLock size={20} onClick={backToLogin} />
        </IconButton>
      </IconsWrapper>
    </TopBarContainer>
  );
}