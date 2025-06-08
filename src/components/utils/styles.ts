import styled from 'styled-components';

export const ButtonLabel = styled.button`
 width: 100%;
max-width: 120px; /* evita esticar demais em telas grandes */
height: 36px;
background: ${({ theme }) => theme.colors.primary};
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
border: 0;
padding: 0 12px;
font-size: 0.9rem;
white-space: nowrap;
transition: background 0.3s ease;
margin:10px;

&:hover {
  background: ${({ theme }) => theme.colors['primary-hover']}; 
  cursor: pointer;
}

@media (max-width: 480px) {
  max-width: 100%;
  font-size: 0.8rem;
  height: 32px;
}
   `
export const BodyContainer = styled.div`
   background: linear-gradient(to bottom right, #f5f7ff, #f0fff8); `

export const Inputs = styled.input`
   padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 200px;
`

export const Filter = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;`

export const Container = styled.div `
   background: linear-gradient(to bottom right, #f5f7ff, #f0fff8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;`

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 20px;
`