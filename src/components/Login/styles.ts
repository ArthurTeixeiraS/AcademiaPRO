import styled from 'styled-components';

export const DivLogin = styled.form`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 32rem;
  padding: 4rem 3rem;
  text-align: center;
  flex-direction: column;
  border-radius: 4px; 
  margin: 1.5rem;
  
  h2 {
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  }`

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

export const Inputs = styled.input`
   width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const ButtonLabel = styled.button`
    width: 70px;
    height: 30px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    align-items: center;
    border-radius: 4px;
    border: 0;

    &:hover{
      background: ${({ theme }) => theme.colors['primary-hover']};  
    }
`

export const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input[type='checkbox']{
    margin: 0.3rem;
    accent-color: ${({ theme }) => theme.colors.primary};
  }

  label {
    font-size: 1.2rem;
  }
  
`
