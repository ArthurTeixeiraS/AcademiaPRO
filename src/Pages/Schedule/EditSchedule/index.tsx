import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Schedule } from "../../../@types/schedule";
import { SideMenu } from "../../../components/SideMenu";
import { TopBar } from "../../../components/TopBar";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { RoundedCard } from "../../../components/RoundedCard";
import { AlertToast } from "../../../components/Alerts/AlertToast";
import { 
  getScheduleById,
  saveScheduleToLocalStorage
} from "../../../components/utils/LocalStorage/ScheduleUtils";
import { getCustomersFromLocalStorage } from "../../../components/utils/LocalStorage/CustomersUtils";
import { getModalitiesFromLocalStorage } from "../../../components/utils/LocalStorage/ModalityUtils";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";

export function EditSchedule() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  
  const [formData, setFormData] = useState<Omit<Schedule, 'id'>>({
    alunoId: '',
    alunoNome: '',
    modalidadeId: '',
    modalidadeNome: '',
    data: '',
    horario: ''
  });

  const [alunos, setAlunos] = useState<{ id: string; nome: string }[]>([]);
  const [modalidades, setModalidades] = useState<{ id: string; nome: string }[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const alunosData = getCustomersFromLocalStorage();
        const modalidadesData = getModalitiesFromLocalStorage();
        
        setAlunos(alunosData.map(a => ({ id: a.id, nome: a.nome })));
        setModalidades(modalidadesData.map(m => ({ id: m.id, nome: m.nome })));

        if (id) {
            const agendamento = getScheduleById(id);
            if (agendamento) {
            setFormData({
                ...agendamento,
                data: agendamento.data.includes('T') 
                ? agendamento.data.split('T')[0] 
                : agendamento.data,
                horario: agendamento.horario
            });
            }
        }
      } catch (error) {
        setToast({ message: 'Erro ao carregar dados', type: 'error' });
        console.error(error);
      }
    };

    loadData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.alunoId || !formData.modalidadeId || !formData.data || !formData.horario) {
      setToast({ message: 'Preencha todos os campos!', type: 'error' });
      return;
    }

    try {
      if (!id) throw new Error('ID inválido');

      const success = saveScheduleToLocalStorage({
        id,
        ...formData
      });

      if (success) {
        setToast({ message: 'Agendamento atualizado com sucesso!', type: 'success' });
        setTimeout(() => navigate('/Schedule'), 2000);
      } else {
        throw new Error('Falha ao salvar');
      }
    } catch (error) {
      setToast({ message: 'Erro ao atualizar agendamento', type: 'error' });
      console.error(error);
    }
  };

  return (
    <>
      <SideMenu />
      <TopBar />
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="40rem">
          <Form onSubmit={handleSubmit}>
            <h1>Editar Agendamento</h1>

            <label htmlFor="alunoId">Aluno</label>
            <select
              name="alunoId"
              id="alunoId"
              value={formData.alunoId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um aluno</option>
              {alunos.map(aluno => (
                <option key={aluno.id} value={aluno.id}>
                  {aluno.nome}
                </option>
              ))}
            </select>

            <label htmlFor="modalidadeId">Modalidade</label>
            <select
              name="modalidadeId"
              id="modalidadeId"
              value={formData.modalidadeId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma modalidade</option>
              {modalidades.map(mod => (
                <option key={mod.id} value={mod.id}>
                  {mod.nome}
                </option>
              ))}
            </select>

            <label htmlFor="data">Data</label>
            <input
              type="date"
              name="data"
              id="data"
              value={formData.data}
              onChange={handleChange}
              required
            />

            <label htmlFor="horario">Horário</label>
            <input
              type="time"
              name="horario"
              id="horario"
              value={formData.horario}
              onChange={handleChange}
              required
            />

            <ButtonGroup className="multipleButtons">
              <ButtonLabel type="submit">Salvar Alterações</ButtonLabel>
              <ButtonLabel type="button" onClick={() => navigate('/Schedule')}>
                Cancelar
              </ButtonLabel>
            </ButtonGroup>
          </Form>
        </RoundedCard>
      </FlexibleContentContainer>

      {toast && (
        <AlertToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}