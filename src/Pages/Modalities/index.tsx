import { useState, useEffect } from "react";
import { TopBar } from "../../components/TopBar";
import { SideMenu } from "../../components/SideMenu";
import { MainContentContainer } from "../../components/utils/generic";
import { NewRegister } from "../../components/NewRegister";
import { ModalityCard } from "../../components/ModalityCard";
import { AlertConfirm } from "../../components/Alerts/AlertConfirm";
import { AlertToast } from "../../components/Alerts/AlertToast";

import {
  listarModalidades,
  excluirModalidade,
} from "../../services/modalityService";

import type { ModalidadeResponse } from "../../@types/modality";
import type { Page } from "../../services/page";

export function Modalities() {
  const [modalidades, setModalidades] = useState<ModalidadeResponse[]>([]);
  const [pageInfo, setPageInfo] = useState<Page<ModalidadeResponse> | null>(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const pageSize = 20;

  const carregarModalidades = async (page = 0) => {
    try {
      setLoading(true);
      setToast(null);

      const result = await listarModalidades(page, pageSize);

      setModalidades(result.content);
      setPageInfo(result);
      setPageNumber(result.number);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error ? error.message : "Erro ao carregar modalidades.";
      setToast({ message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarModalidades(0);
  }, []);

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await excluirModalidade(selectedId);
      setToast({ message: "Modalidade removida com sucesso!", type: "success" });

      // recarregar página atual
      await carregarModalidades(pageNumber);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error ? error.message : "Erro ao remover modalidade.";
      setToast({ message, type: "error" });
    } finally {
      setShowConfirm(false);
      setSelectedId(null);
    }
  };

  const handleChangePage = async (newPage: number) => {
    if (!pageInfo) return;
    if (newPage < 0 || newPage >= pageInfo.totalPages) return;
    await carregarModalidades(newPage);
  };

  return (
    <>
      <TopBar placeholder="Pesquisar por modalidades" />
      <SideMenu />

      <MainContentContainer $repeatColumns={4}>
        <NewRegister
          entityName="Modalidade"
          createPath="/newmodality"
          buttonText="Nova modalidade"
        />

        {loading && modalidades.length === 0 ? (
          <p>Carregando modalidades...</p>
        ) : (
          <ModalityCard modalities={modalidades} onDelete={confirmDelete} />
        )}
      </MainContentContainer>

      {/* Paginação */}
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

      {/* Confirmação de exclusão */}
      {showConfirm && (
        <AlertConfirm
          message="Tem certeza que deseja excluir esta modalidade?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {/* Toast de feedback */}
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