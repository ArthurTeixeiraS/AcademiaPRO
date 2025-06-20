import styled from 'styled-components';
import backgroundImage from '../../assets/login.png';

export const MenuTitle = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  h1 {
   color: #0b132b;
    margin-bottom: 1rem;
  }

  p {
    color: #0b132b;
    font-size: 5rem;
  }
`;

export const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input[type='checkbox']{
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 5%;
  }

  .showPassword {
    font-size: 1.2rem;
    margin: 0.5rem;
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
export const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const LeftContainer = styled.div`
  width: 40%; 
  background-color: #0b132b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 60%;
  background-color: #fff;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center; 
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: 
  /* linear-gradient(to right, rgba(11, 19, 43, 1), rgba(11, 19, 43, 0.2)), */
  /* linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), */
  url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
