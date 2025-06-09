import styled from "styled-components"

// Esse é o container Genérico que deve ser utilizado para encapsular os componentes no projeto
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// Esse container é para telas de login, pois possui um fundo escuro para contraste
export const BackGroundContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  flex-direction: column;`
;

// Esse é o formulário padrão e genérico do Projeto
export const Form = styled.form`
  display: flex;
  flex-direction: column; 
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};

  label{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["font-primary"]};
    margin-bottom: 0.2rem;
  }

  input{
    width: 100%;
    padding: 0.9rem;
    font-size: 1.3rem;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 6px;      
  }

  .optionBox{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
      border-color: #333;
    }
  }

  .optionBox.active {
    border-color: #333; 
    background-color: #e6f0ff; 
  }

  .multipleButtons{
    justify-content: space-evenly;   
  }
`;

// Esse é o container onde vai ficar o conteúdo principal da pagina
export const MainContentContainer = styled.div<{
  $repeatColumns : number;
}>`
  position: fixed;
  left: 32rem;
  top: 10rem;
  display: grid;
  // Esse container é customizável em relação ao número de colunas, o número de colunas pode ser passado via props
  grid-template-columns: repeat(${({ $repeatColumns }) => $repeatColumns}, 1fr);
  width: 82%;
  height: calc(100vh - 8rem);
  overflow-y: auto;

  //Isso é pra estilizar o Scroll bar
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
  }

  @media (max-width: 1609px) {
     grid-template-columns: repeat(1, 1fr); 
     left: 30rem;
  }
`

