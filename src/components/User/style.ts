import styled from 'styled-components';


export const AlunoCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 20px;
  margin-top: 20px;
  max-width: 400px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export const CardInfo = styled.p`
  font-size: 14px;
  color: #555;
  margin: 4px 0;
`;

export const Status = styled.span`
  background-color: #000;
  color: #fff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-left: auto;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

export type Aluno = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  matricula: string;
  plano: string;
};
