import { useNavigate } from "react-router-dom";
import { DivHeader, Container, Inputs } from '../ui/styles';
import { ButtonLabel} from '../ui/styleButton';
import {AlunoCard, Status, CardInfo, ButtonRow } from './style.ts';
import type { Aluno } from "./style.ts";



export function PageOne() {
  const navigate = useNavigate();
  const newUser = () => navigate('/NewUser');

  const alunos: Aluno[] = [
    {
      id: 1,
      nome: 'Maria Silva',
      email: 'maria.silva@email.com',
      telefone: '(11) 99999-9999',
      matricula: '14/01/2024',
      plano: 'Plano Premium',
    },
    {
      id: 2,    
      nome: 'João Souza',
      email: 'joao.souza@email.com',
      telefone: '(21) 98888-8888',
      matricula: '10/03/2024',
      plano: 'Plano Básico',
    },
  ];

  return (
    <>
      <DivHeader>
        <h1> Alunos</h1>
      </DivHeader>

      <Container>

        {alunos.map((aluno) => (
          <AlunoCard key={aluno.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>{aluno.nome}</h2>
            </div>
            <CardInfo>📧 {aluno.email}</CardInfo>
            <CardInfo>📞 {aluno.telefone}</CardInfo>
            <CardInfo>📅 Matrícula: {aluno.matricula}</CardInfo>
            <CardInfo><strong>{aluno.plano}</strong></CardInfo>

            <ButtonRow>
              <ButtonLabel onClick={() => navigate(`/EditUser/${aluno.id}`)}>Editar</ButtonLabel>
            </ButtonRow>
          </AlunoCard>
        ))}
        <AlunoCard>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Não encontrou?</h2>
            </div>
            <CardInfo>Cadastre um novo aluno!</CardInfo>
            <ButtonLabel onClick = {newUser}>Novo aluno</ButtonLabel>
        </AlunoCard>
      </Container>
    </>
  );
}
