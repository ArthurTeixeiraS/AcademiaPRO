// src/services/modalityService.ts

import { apiGet, apiPost, apiPut, apiDelete } from './apiService';
import type { ModalidadeRequest, ModalidadeResponse } from '../@types/modality';
import type { Page } from './page';

export async function listarModalidades(page = 0, size = 10): Promise<Page<ModalidadeResponse>> {
  return apiGet<Page<ModalidadeResponse>>(`/modalidades?page=${page}&size=${size}`);
}

export async function buscarModalidadePorId(id: string): Promise<ModalidadeResponse> {
  return apiGet<ModalidadeResponse>(`/modalidades/${id}`);
}

export async function criarModalidade(
  dados: ModalidadeRequest
): Promise<ModalidadeResponse> {
  return apiPost<ModalidadeRequest, ModalidadeResponse>('/modalidades', dados);
}

export async function atualizarModalidade(
  id: string,
  dados: ModalidadeRequest
): Promise<ModalidadeResponse> {
  return apiPut<ModalidadeRequest, ModalidadeResponse>(`/modalidades/${id}`, dados);
}

export async function excluirModalidade(id: string): Promise<void> {
  return apiDelete(`/modalidades/${id}`);
}
