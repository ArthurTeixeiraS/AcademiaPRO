// Menu lateral com navegação entre as páginas principais
import { Link, useNavigate } from "react-router-dom";
import {
  MenuContainer,
  MenuHeader,
  MenuSection,
  SectionTitle,
  MenuItem,
  LogoutButton,
} from "./styles";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";

export function SideMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <MenuContainer>
      <MenuHeader>
        <h2>Olá, {user ?? "Usuário"}</h2>
        <p>Painel AcademiaPRO</p>
      </MenuHeader>

      <MenuSection id="homebtn">
        <Link to="/DashBoard">
          <FaHome color="white" size={20} />
          <SectionTitle>Home</SectionTitle>
        </Link>
      </MenuSection>

      <MenuSection>
        <SectionTitle>Cadastros Básicos</SectionTitle>
        <MenuItem>
          <Link to="/Customers">- Alunos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Modalities">- Modalidades</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Schedule">- Agendamentos</Link>
        </MenuItem>
      </MenuSection>

      <LogoutButton type="button" onClick={handleLogout}>
        <FiLogOut size={18} />
        <span>Logout</span>
      </LogoutButton>
    </MenuContainer>
  );
}