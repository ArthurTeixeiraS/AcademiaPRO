import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MainContentContainer = styled.div`
  position: fixed;
  left: 32rem;
  top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 82%;
  height: calc(100vh - 70px);
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