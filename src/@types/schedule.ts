// Representa os dados de Agendamento conforme a API

import type { UUID } from "./customer";
import type { AlunoResponse } from "./customer";
import type { ModalidadeResponse } from "./modality";

export interface AgendamentoResponse {
  id: UUID;
  data: string;    
  alunoId: UUID;
  modalidadeId: UUID;
}

export interface AgendamentoRequest {
  data: string;      
  alunoId: UUID;
  modalidadeId: UUID;
}

export interface AgendamentoDetalhado {
  id: UUID;
  data: string;
  aluno: AlunoResponse;
  modalidade: ModalidadeResponse;
}
