import type { Modality, ModalityStorage } from "../../../@types/modality";

//Serve para Editar ou Adicionar Modalidades
//Tive que fazer essa repetição maluca pois não achei uma forma mais facil de lidar com os tipos do TS.
export const saveModalityToLocalStorage = (newModality: Modality) => {
  try {
    const storedModalities = localStorage.getItem('modalities');
    let modalities: ModalityStorage = storedModalities ? JSON.parse(storedModalities) : [];
    
    if (!newModality.id){
        newModality.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
        modalities = [...modalities, newModality];
        
    } else {
        modalities.forEach((modality, index) => {
            //Se os ID's são iguais, significa que está em modo de edição
            if (modality.id === newModality.id){
                modalities[index] = newModality
                return;
            }          
        });
    }
    console.log(modalities)
    localStorage.setItem('modalities', JSON.stringify(modalities));
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error);
  }
};

export const getModalitiesFromLocalStoragem = (): ModalityStorage => {
  try {
    const storedModalities = localStorage.getItem('modalities');
    return storedModalities ? JSON.parse(storedModalities) : [];
  } catch (error) {
    console.error('Erro ao ler do localStorage:', error);
    return [];
  }
};