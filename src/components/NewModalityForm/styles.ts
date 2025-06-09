import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;


export const Button = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1.3rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors["primary-hover"]};
  }
`;
