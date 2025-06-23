import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/SideMenu";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { RoundedCard } from "../../../components/RoundedCard";
import { useNavigate } from "react-router-dom";
import { AlertToast } from "../../../components/Alerts/AlertToast";
import { saveScheduleToLocalStorage } from "../../../components/utils/LocalStorage/ScheduleUtils";
import { getCustomersFromLocalStorage } from "../../../components/utils/LocalStorage/CustomersUtils";
import { getModalitiesFromLocalStorage } from "../../../components/utils/LocalStorage/ModalityUtils";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";

export function NewSchedule() {
    const [formData, setFormData] = useState({
        alunoId: '',
        modalidadeId: '',
        data: '',
        horario: ''
    });

    const [alunos, setAlunos] = useState<{ id: string, nome: string }[]>([]);
    const [modalidades, setModalidades] = useState<{ id: string, nome: string }[]>([]);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const carregarDados = () => {
            const alunosData = getCustomersFromLocalStorage();
            const modalidadesData = getModalitiesFromLocalStorage();
            
            setAlunos(alunosData.map(aluno => ({ id: aluno.id, nome: aluno.nome })));
            setModalidades(modalidadesData.map(mod => ({ id: mod.id, nome: mod.nome })));
        };

        carregarDados();
    }, []);

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
            const alunoSelecionado = alunos.find(a => a.id === formData.alunoId);
            const modalidadeSelecionada = modalidades.find(m => m.id === formData.modalidadeId);

            if (!alunoSelecionado || !modalidadeSelecionada) {
            throw new Error('Dados inválidos');
            }

            const dataCorrigida = formData.data.split('T')[0];
            
            const novoAgendamento = {
            ...formData,
            data: dataCorrigida,
            horario: formData.horario,
            alunoNome: alunoSelecionado.nome,
            modalidadeNome: modalidadeSelecionada.nome
            };

            const success = saveScheduleToLocalStorage(novoAgendamento);

            if (success) {
            setToast({ message: 'Agendamento salvo com sucesso!', type: 'success' });
            setTimeout(() => {
                setFormData({
                alunoId: '',
                modalidadeId: '',
                data: '',
                horario: ''
                });
                navigate('/Schedule');
            }, 2000);
            } else {
            throw new Error('Falha ao salvar');
            }
        } catch (error) {
            setToast({ message: 'Erro ao salvar agendamento', type: 'error' });
            console.error(error);
        }
    };

    return (
        <>
            <SideMenu/>
            <FlexibleContentContainer>
                <RoundedCard width="45rem" height="40rem">
                    <Form onSubmit={handleSubmit}>
                        <h1>Cadastrar Novo Agendamento</h1>

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
                            <ButtonLabel type="submit">Salvar Agendamento</ButtonLabel>
                            <ButtonLabel type="button" onClick={() => navigate('/Schedule')}>Cancelar</ButtonLabel>
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