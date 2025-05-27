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
  height: 90vh;
`