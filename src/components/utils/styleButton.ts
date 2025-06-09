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
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
`;

