export const API_BASE_URL = 'http://localhost:8080';

export interface ApiErrorResponse {
  timestamp?: string;
  status?: number;
  error?: string;
  message?: string;
  path?: string;
}

function getAuthHeader(): HeadersInit {
  const token = sessionStorage.getItem('authToken');
  if (!token) return {};
  return {
    Authorization: `Basic ${token}`,
  };
}

async function handleError(response: Response): Promise<never> {
  let errorMessage = `Erro na requisição: ${response.status}`;

  try {
    const data = (await response.json()) as ApiErrorResponse;
    if (data.message) {
      errorMessage = data.message;
    } else if (data.error) {
      errorMessage = data.error;
    }
  } catch {
    // body não era JSON, mantém mensagem padrão
  }

  throw new Error(errorMessage);
}

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    method: 'GET',
    headers: {
      ...(init?.headers || {}),
      ...getAuthHeader(),
    },
  });

  if (!response.ok) {
    await handleError(response);
  }

  return (await response.json()) as T;
}

export async function apiPost<TRequest, TResponse>(
  path: string,
  body: TRequest,
  init?: RequestInit
): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
      ...getAuthHeader(),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    await handleError(response);
  }

  return (await response.json()) as TResponse;
}

export async function apiPut<TRequest, TResponse>(
  path: string,
  body: TRequest,
  init?: RequestInit
): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
      ...getAuthHeader(),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    await handleError(response);
  }

  return (await response.json()) as TResponse;
}

export async function apiDelete(path: string, init?: RequestInit): Promise<void> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    method: 'DELETE',
    headers: {
      ...(init?.headers || {}),
      ...getAuthHeader(),
    },
  });

  if (!response.ok) {
    await handleError(response);
  }
}
