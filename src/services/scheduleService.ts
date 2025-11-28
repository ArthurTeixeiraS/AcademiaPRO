import { apiGet, apiPost, apiPut, apiDelete } from './apiService';
import type {
  AgendamentoRequest,
  AgendamentoResponse,
} from '../@types/schedule';
import type { Page } from './page';

export async function listarAgendamentos(
  page = 0,
  size = 10
): Promise<Page<AgendamentoResponse>> {
  return apiGet<Page<AgendamentoResponse>>(`/agendamentos?page=${page}&size=${size}`);
}

export async function listarAgendamentosPorAluno(
  alunoId: string
): Promise<AgendamentoResponse[]> {
  return apiGet<AgendamentoResponse[]>(`/agendamentos/aluno/${alunoId}`);
}

export async function buscarAgendamentoPorId(id: string): Promise<AgendamentoResponse> {
  return apiGet<AgendamentoResponse>(`/agendamentos/${id}`);
}

export async function criarAgendamento(
  dados: AgendamentoRequest
): Promise<AgendamentoResponse> {
  return apiPost<AgendamentoRequest, AgendamentoResponse>('/agendamentos', dados);
}

export async function atualizarAgendamento(
  id: string,
  dados: AgendamentoRequest
): Promise<AgendamentoResponse> {
  return apiPut<AgendamentoRequest, AgendamentoResponse>(`/agendamentos/${id}`, dados);
}

export async function excluirAgendamento(id: string): Promise<void> {
  return apiDelete(`/agendamentos/${id}`);
}