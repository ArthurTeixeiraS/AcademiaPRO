import { FiSearch, FiSettings, FiBell, FiLock } from 'react-icons/fi';
import { TopBarContainer, IconButton, NotificationBadge } from './styles';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '../utils/generic';

interface Props {
  placeholder?: string;
}

export function TopBar({placeholder= "Pesquisar..."}: Props) {
  const navigate = useNavigate();

  const backToLogin = () => {
      navigate('/')
  }
  return (
    <TopBarContainer>
        {/* Wrapper = "Agrupador" */}
      <div className='searchWrapper'>
        <FiSearch size={20} />
        <SearchInput placeholder={placeholder} />
      </div>

      <div className='iconWrapper'>
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
      </div>
    </TopBarContainer>
  );
}