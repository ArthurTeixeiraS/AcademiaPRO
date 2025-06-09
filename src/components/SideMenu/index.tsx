import { Link } from 'react-router-dom';
import { 
  MenuContainer, MenuHeader, MenuSection, 
  SectionTitle, MenuItem, LogoutButton
} from './styles';
import { FaHome } from "react-icons/fa";
import { FiLogOut } from 'react-icons/fi';


export function SideMenu() {
  return (
    // Revisar caso algo possa ser reutilizado
    <MenuContainer>
      <MenuHeader>
        <h2>João Silva</h2>
        <p>Painel do Professor</p>
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
          <Link to="/Customers">
            - Alunos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Modalitys"> 
            - Modalidades
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Schedule">
            - Agendamentos
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

