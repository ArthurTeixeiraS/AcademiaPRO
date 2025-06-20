export type Schedule = {
    id: string;
    alunoId: string;
    alunoNome: string;
    modalidadeId: string;
    modalidadeNome: string;
    data: string;  // formato AAAA-MM-DD
    horario: string;  // formato HH:MM
} 

export type ScheduleStorage = Schedule[]