import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginMenu: React.FC = () => {
  return (
    <MenuContainer>
      <div>
        <Logo>MinhaApp</Logo>
        <NavLinks>
          <StyledLink to="/about">Sobre</StyledLink>
          <StyledLink to="/help">Ajuda</StyledLink>
          <StyledLink to="/contact">Contato</StyledLink>
        </NavLinks>
      </div>
      <p style={{ fontSize: '0.8rem' }}>© 2025 MinhaApp</p>
    </MenuContainer>
  );
};
