import styled from "styled-components";

export const AlunoCard = styled.div`
  background-color: #fff;
  height: 22rem;
  border-radius: 1.2rem;
  border: 1px solid #eee;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardInfo = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors['font-secondary']};
  margin: 0.4rem 0;

  strong{
    margin-left: 0.2rem;
  }
`;