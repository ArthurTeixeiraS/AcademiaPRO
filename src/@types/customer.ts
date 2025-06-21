// Modelo de estrutura para os dados dos alunos

export type Customer = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  plano: string;
};

export type CustomersStorage = Customer[];
