import styled from "styled-components";

export const CardContainer = styled.div<{
  $width: string;
  $height: string;
  $color: string;
  $backgroundColor: string;
  $isLarge: boolean;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  p{
    font-size: 1.5rem;
    margin-top: 1rem;
  } 

  .margin{
    margin-top: 1.5rem;
  }

  @media (max-width: 1609px) {
     width: ${props => props.$isLarge ? '90%' : props.$width};
  }

  @media (max-width: 1260px) {
     width: ${props => props.$isLarge ? '80%' : props.$width};
     height: ${props => props.$isLarge ? '25%' : props.$height};;
  }

  @media (max-width: 970px) {
     width: ${props => props.$isLarge ? '60%' : props.$width};
     height: ${props => props.$isLarge ? '28%' : props.$height};
  }
`;