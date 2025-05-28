import styled from "styled-components";

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