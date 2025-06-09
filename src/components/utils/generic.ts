import styled from "styled-components"

// Esse é o container Genérico que deve ser utilizado para encapsular os componentes no projeto
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// Esse container é para telas de cadastro ou alteração, pois possui um fundo escuro
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

