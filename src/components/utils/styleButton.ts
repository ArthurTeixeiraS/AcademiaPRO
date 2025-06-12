import styled from 'styled-components';

//Arquivo específico para botões genéricos
export const ButtonLabel = styled.button<{ $variant?: 'primary' | 'danger' }>`
 width: 100%;
max-width: 13rem;
height: 3.6rem;
background: ${({ theme }) => theme.colors.primary};
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
border: 0;
padding: 0 1.2rem;
font-size: 1.2rem;
white-space: nowrap;
transition: background 0.3s ease;

background-color: ${({ $variant, theme }) => 
    $variant === 'danger' ? theme.colors.error : theme.colors.primary};
  

&:hover {
  cursor: pointer;
  opacity: 0.92;
}

@media (max-width: 480px) {
  max-width: 100%;
  font-size: 0.8rem;
  height: 32px;
}`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

