import type { Schedule, ScheduleStorage } from "../../../@types/schedule";

//Salva ou edita uma Schedule no local Storage
export const saveScheduleToLocalStorage = (scheduleData: Omit<Schedule, 'id'> & { id?: string }): boolean => {
  try {
    const storedSchedules = localStorage.getItem('schedule');
    let schedules: ScheduleStorage = storedSchedules ? JSON.parse(storedSchedules) : [];

    const id = scheduleData.id || Date.now().toString(36) + Math.random().toString(36).substring(2);

    const scheduleToSave: Schedule = {
      id,
      alunoId: scheduleData.alunoId,
      alunoNome: scheduleData.alunoNome,
      modalidadeId: scheduleData.modalidadeId,
      modalidadeNome: scheduleData.modalidadeNome,
      data: scheduleData.data,
      horario: scheduleData.horario
    };

    if (scheduleData.id) {
      schedules = schedules.map(s => 
        s.id === scheduleData.id ? scheduleToSave : s
      );
    } else {
      schedules = [...schedules, scheduleToSave];
    }

    localStorage.setItem("schedule", JSON.stringify(schedules));
    return true;
  } catch (error) {
    console.error("Erro ao salvar agendamento:", error);
    return false;
  }
};

export const getSchedulesFromLocalStorage = (): ScheduleStorage => {
  try {
    const storedSchedules = localStorage.getItem("schedule");
    return storedSchedules ? JSON.parse(storedSchedules) : [];
  } catch (error) {
    console.error("Erro ao ler do localStorage:", error);
    return [];
  }
};

export const getScheduleById = (id: string): Schedule | undefined => {
  try{
    const storedSchedules = localStorage.getItem("schedule");
    if (!storedSchedules) return undefined;

    const schedules: Schedule[] = JSON.parse(storedSchedules)
    return schedules.find((schedule) => schedule.id === id)
  } catch(error) {
    console.error("Erro ao buscar Schedule: ", error)
  }
}

export const removeScheduleFromLocalStorage = (id: string): boolean =>{
  try{
    const storedSchedules = localStorage.getItem("schedule")
    if(!storedSchedules) return false;

    const schedules: Schedule[] = JSON.parse(storedSchedules);
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    
    localStorage.setItem("schedule",JSON.stringify(updatedSchedules))
    return true;
  } catch (error){
    console.error("Erro ao remover Schedule: ", error)
    return false;
  }
}