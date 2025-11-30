import { useState, useEffect } from "react";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { Container, MainContentContainer } from "../../components/utils/generic";
import { CustomerCard } from "../../components/CustomerCard";
import { NewRegister } from "../../components/NewRegister";
import { AlertConfirm } from "../../components/Alerts/AlertConfirm";
import { AlertToast } from "../../components/Alerts/AlertToast";

import {
  listarAlunos,
  excluirAluno,
} from "../../services/customerService";
import type { AlunoResponse } from "../../@types/customer";
import type { Page } from "../../services/page";

export function Customers() {
  const [alunos, setAlunos] = useState<AlunoResponse[]>([]);
  const [pageInfo, setPageInfo] = useState<Page<AlunoResponse> | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 10;

  const carregarAlunos = async (page = 0) => {
    try {
      setLoading(true);
      setToast(null);
      const result = await listarAlunos(page, pageSize);
      setAlunos(result.content);
      setPageInfo(result);
      setPageNumber(result.number);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error
          ? error.message
          : "Erro ao carregar alunos.";
      setToast({ message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarAlunos(0);
  }, []);

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await excluirAluno(selectedId);
      setToast({ message: "Aluno removido com sucesso", type: "success" });
      await carregarAlunos(pageNumber);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error
          ? error.message
          : "Erro ao remover aluno.";
      setToast({ message, type: "error" });
    } finally {
      setShowConfirm(false);
      setSelectedId(null);
    }
  };

  const handleChangePage = async (newPage: number) => {
    if (!pageInfo) return;
    if (newPage < 0 || newPage >= pageInfo.totalPages) return;
    await carregarAlunos(newPage);
  };

  return (
    <Container>
      <SideMenu />
      <TopBar placeholder="Pesquisar por alunos" />

      <MainContentContainer $repeatColumns={4}>
        <NewRegister
          entityName="Aluno"
          createPath="/newcustomer"
          buttonText="Novo aluno"
        />

        {loading && alunos.length === 0 ? (
          <p>Carregando alunos...</p>
        ) : (
          <CustomerCard customers={alunos} onDelete={confirmDelete} />
        )}
      </MainContentContainer>

      {pageInfo && pageInfo.totalPages > 1 && (
        <div style={{ margin: "1rem 0 0 18rem" }}>
          <button
            onClick={() => handleChangePage(pageNumber - 1)}
            disabled={pageInfo.first}
          >
            Anterior
          </button>
          <span style={{ margin: "0 8px" }}>
            Página {pageInfo.number + 1} de {pageInfo.totalPages}
          </span>
          <button
            onClick={() => handleChangePage(pageNumber + 1)}
            disabled={pageInfo.last}
          >
            Próxima
          </button>
        </div>
      )}

      {showConfirm && (
        <AlertConfirm
          message="Tem certeza que deseja excluir este aluno?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {toast && (
        <AlertToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </Container>
  );
}