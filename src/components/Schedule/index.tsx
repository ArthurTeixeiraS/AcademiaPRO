import { useNavigate } from "react-router-dom";
import { Inputs, DivHeader } from "../utils/styles";
import { ButtonLabel} from '../utils/styleButton'
import { Container } from "../utils/generic";

export function MainSchedule() {
  const navigate = useNavigate();

  const newSchedule = () => {
    navigate('/NewSchedule');
  };

  return (
    <>
      {/* Pendente */}
      <DivHeader>
        <h1>Gerenciar Agendamentos</h1>
        <ButtonLabel onClick={newSchedule}>+ Novo Agendamento</ButtonLabel>
      </DivHeader>

      <Container>
        <Inputs placeholder="Buscar agendamentos..." />
        
        <div className="mt-6 rounded-lg border p-6 shadow-sm bg-white max-w-md">
          <h2 className="text-xl font-semibold">Consulta João Silva</h2>
          <p className="text-sm text-gray-500 mt-2">Data: 10/06/2025</p>
          <p className="text-sm text-gray-500">Horário: 14:00</p>
          <p className="text-sm text-gray-500">Status: Confirmado</p>
          
          <div className="mt-4 flex gap-2">
            <ButtonLabel onClick={() => navigate("/Edit/1")}>Editar</ButtonLabel>
            <ButtonLabel>Histórico</ButtonLabel>
          </div>
        </div>
      </Container>
    </>
  );
}
