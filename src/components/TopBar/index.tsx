import { FiSearch, FiSettings, FiBell, FiLock } from 'react-icons/fi';
import { 
    TopBarContainer, SearchWrapper, SearchInput,
    IconsWrapper, IconButton, NotificationBadge
 } from './styles';

export function TopBar() {
  return (
    <TopBarContainer>
        {/* Wrapper = "Agrupador" */}
      <SearchWrapper>
        <FiSearch size={20} />
        <SearchInput placeholder="Pesquisar..." />
      </SearchWrapper>


      <IconsWrapper>
        <IconButton>
          <FiSettings size={20} />
        </IconButton>
        <IconButton>
          <FiBell size={20} />
          <NotificationBadge>1</NotificationBadge>
        </IconButton>
        <IconButton>
          <FiLock size={20} />
        </IconButton>
      </IconsWrapper>
    </TopBarContainer>
  );
}