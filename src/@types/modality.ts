// Representa os dados de Modalidade conforme a API

import type { UUID } from "./customer";

export interface ModalidadeResponse {
  id: UUID;
  nome: string;
  descricao: string | null;
  duracao: number;    
  capacidade: number;  
}

export interface ModalidadeRequest {
  nome: string;
  descricao?: string | null;
  duracao: number;
  capacidade: number;
}

export type ModalidadeForm = ModalidadeRequest;