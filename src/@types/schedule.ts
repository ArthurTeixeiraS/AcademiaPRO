import type { UUID } from "./customer";

export interface AgendamentoRequest {
  data: string;      
  alunoId: UUID;
  modalidadeId: UUID;
}
export interface AgendamentoResponse {
  id: string;
  data: string;
  alunoId: string;
  alunoNome: string;
  modalidadeId: string;
  modalidadeNome: string;
}


export type AgendamentoForm = AgendamentoRequest;
