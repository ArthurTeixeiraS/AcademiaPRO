// src/Pages/CadastroModalidade/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30rem;
  margin-top: 10rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["font-primary"]};
  margin-bottom: 0.2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  font-size: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 6px;
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
