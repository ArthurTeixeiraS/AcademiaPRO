import { useEffect, useState } from "react";
import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { FlexibleContentContainer } from "../../components/utils/generic";

import { listarAlunos } from "../../services/customerService";
import { listarModalidades } from "../../services/modalityService";
import { listarAgendamentos } from "../../services/scheduleService";
import { useAuth } from "../../contexts/AuthContext";

export function DashBoard() {
  const { user } = useAuth();

  const [totalAlunos, setTotalAlunos] = useState(0);
  const [totalModalidades, setTotalModalidades] = useState(0);
  const [totalAgendamentos, setTotalAgendamentos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const carregarTotais = async () => {
      try {
        setLoading(true);
        setErro(null);

        const [alunosPage, modalidadesPage, agendamentosPage] = await Promise.all([
          listarAlunos(0, 1),
          listarModalidades(0, 1),
          listarAgendamentos(0, 1),
        ]);

        setTotalAlunos(alunosPage.totalElements);
        setTotalModalidades(modalidadesPage.totalElements);
        setTotalAgendamentos(agendamentosPage.totalElements);
      } catch (e) {
        console.error(e);
        setErro("Erro ao carregar os totais do dashboard.");
      } finally {
        setLoading(false);
      }
    };

    carregarTotais();
  }, []);

  return (
    <>
      <SideMenu />
      <FlexibleContentContainer>
        <div className="dashBoardTitle">
          <h1>Bem-vindo, {user ?? "Usuário"}</h1>
          <p>
            Gerencie seus alunos, modalidades e agendamentos de forma simples e
            eficiente!
          </p>
        </div>

        {erro && <p style={{ color: "#ff4d4f", marginBottom: "1rem" }}>{erro}</p>}

        <div className="rowSection">
          <RoundedCard width="90%" height="100%" linkTo="/Customers">
            <h2>
              Temos {loading ? "..." : totalAlunos} alunos cadastrados!
            </h2>
          </RoundedCard>

          <RoundedCard width="90%" height="100%" linkTo="/Modalities">
            <h2>
              Temos {loading ? "..." : totalModalidades} modalidades cadastradas!
            </h2>
          </RoundedCard>

          <RoundedCard width="90%" height="100%" linkTo="/Schedule">
            <h2>
              Temos {loading ? "..." : totalAgendamentos} agendamentos cadastrados!
            </h2>
          </RoundedCard>
        </div>
      </FlexibleContentContainer>
    </>
  );
}
