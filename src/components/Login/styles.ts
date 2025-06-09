import styled from 'styled-components';

export const MenuTitle = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 5rem;
  }
`;

export const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input[type='checkbox']{
    margin: 0.3rem;
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 5%;
  }

  .showPassword {
    font-size: 1.2rem;
    margin: 0;
  }
  
`

export const LoginConfigForm = styled.div`
  //Esse é um caso específico da tela de login onde alguns códigos vão precisar ser reutilizados para o funcionamento ideal do layout
  padding: 2rem;

  h2{
    margin-bottom: 0.8rem;
  }
  label{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["font-primary"]};
    margin-bottom: 0.2rem;
  }

  input[type='password'], input[type='text']{
    width: 100%;
    padding: 0.9rem;
    font-size: 1.3rem;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 6px;     
    margin: 0 0 1rem 0;
  }
`
