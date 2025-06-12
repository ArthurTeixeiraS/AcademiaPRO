export type Modality = {
    id: string;
    nome: string;
    descricao: string;
    capacidade: number;
    publicoAlvo: string;
} 

export type ModalityStorage = Modality[]