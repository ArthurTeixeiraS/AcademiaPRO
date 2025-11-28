// src/services/customerService.ts

import { apiGet, apiPost, apiPut, apiDelete } from './apiService';
import type { AlunoRequest, AlunoResponse } from '../@types/customer';
import type { Page } from './page';

export async function listarAlunos(page = 0, size = 10): Promise<Page<AlunoResponse>> {
  return apiGet<Page<AlunoResponse>>(`/alunos?page=${page}&size=${size}`);
}

export async function buscarAlunoPorId(id: string): Promise<AlunoResponse> {
  return apiGet<AlunoResponse>(`/alunos/${id}`);
}

export async function criarAluno(dados: AlunoRequest): Promise<AlunoResponse> {
  return apiPost<AlunoRequest, AlunoResponse>('/alunos', dados);
}

export async function atualizarAluno(id: string, dados: AlunoRequest): Promise<AlunoResponse> {
  return apiPut<AlunoRequest, AlunoResponse>(`/alunos/${id}`, dados);
}

export async function excluirAluno(id: string): Promise<void> {
  return apiDelete(`/alunos/${id}`);
}