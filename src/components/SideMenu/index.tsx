import { Link } from 'react-router-dom';
import { 
  MenuContainer, MenuHeader, MenuSection, 
  SectionTitle, MenuItem, LogoutButton
} from './styles';
import { FaHome } from "react-icons/fa";
import { FiLogOut } from 'react-icons/fi';


export function SideMenu() {
  return (
    <MenuContainer>
      <MenuHeader>
        <h2>{'{Usuário}'}</h2>
        <p>Painel {'{Academia}'}</p>
      </MenuHeader>

      <MenuSection id='homebtn'>
        <Link to="/DashBoard">
          <FaHome color='white' size={20}/> 
          <SectionTitle>Home</SectionTitle>
        </Link>
      </MenuSection>

      <MenuSection>
        <SectionTitle>Cadastros Básicos</SectionTitle>
        <MenuItem>
          <Link to="/NewUser">
            - Cadastro de Alunos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/NewModality">
            - Cadastro de Modalidades
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/NewModality">
            - Cadastro de Horários
          </Link>
        </MenuItem>
      </MenuSection>

      <Link to="/">
          <LogoutButton>
            <FiLogOut size={18} />
            <span>Logout</span>
          </LogoutButton>
      </Link>
    </MenuContainer>
  );
}