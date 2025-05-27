import { Link } from 'react-router-dom';
import { MenuContainer, MenuHeader, MenuSection, SectionTitle, MenuItem } from './styles';
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaUser, FaCalendarAlt } from "react-icons/fa";


export function SideMenu() {
  return (
    <MenuContainer>
      <MenuHeader>
        <h2>{'{Usuário}'}</h2>
        <p>Painel {'{Academia}'}</p>
      </MenuHeader>

      <MenuSection>
        <SectionTitle>Cadastros Básicos</SectionTitle>
        <MenuItem>
          <Link to="/NewUser">
          <FaUser color='white' size={20}/>
            Cadastro de Pessoas
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/NewModality">
          <GiWeightLiftingUp color='white' size={25} />
            Cadastro de Modalidades
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/NewModality">
          <FaCalendarAlt color='white' size={20} />
            Cadastro de Horários
          </Link>
        </MenuItem>
      </MenuSection>
    </MenuContainer>
  );
}

