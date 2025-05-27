
import styled from 'styled-components';


export const MenuContainer = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  flex-direction: column;`
;

export const DivLogin = styled.div`
  background: white;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 320px;
  padding: 40px 30px;
  text-align: center;
  flex-direction: column;
  border-radius: 4px; 
  
  h2 {
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
  }`

export const MenuTitle = styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 3rem;
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
  border-radius: 4px;`

export const ButtonLabel = styled.button`
    width: 70px;
    height: 30 px:
    background: ${(props) => props.theme.colors.primary}
    color: white;
    align: center;`
