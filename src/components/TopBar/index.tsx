// Barra superior simples com nome da página atual
import { FiSearch } from 'react-icons/fi';
import { TopBarContainer } from './styles';
import { SearchInput } from '../utils/generic';

interface Props {
  placeholder?: string;
}

export function TopBar({placeholder= "Pesquisar..."}: Props) {
  return (
    <TopBarContainer>
        {/* Wrapper = "Agrupador" */}
      <div className='searchWrapper'>
        <FiSearch size={20} />
        <SearchInput placeholder={placeholder} />
      </div>
    </TopBarContainer>
  );
}