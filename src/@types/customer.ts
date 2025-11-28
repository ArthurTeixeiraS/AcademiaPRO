// Representa os dados de Aluno conforme a API

export type UUID = string;

export interface AlunoResponse {
  id: UUID;
  nome: string;
  idade: number | null;
  email: string;
  telefone: string | null;
  plano: string;
}

export interface AlunoRequest {
  nome: string;
  idade: number | null;
  email: string;
  telefone?: string | null;
  plano: string;
}

export type AlunoForm = AlunoRequest;