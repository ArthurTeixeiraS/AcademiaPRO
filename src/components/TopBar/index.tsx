import { FiSearch, FiLock } from 'react-icons/fi';
import { TopBarContainer, IconButton } from './styles';
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
          <FiLock size={20} onClick={backToLogin} />
        </IconButton>
      </div>
    </TopBarContainer>
  );
}