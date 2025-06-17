import { useState, useEffect } from "react";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { Container, MainContentContainer } from "../../components/utils/generic";
import { CustomerCard } from "../../components/CustomerCard";
import { NewRegister } from "../../components/NewRegister";
import { AlertConfirm } from "../../components/Alerts/AlertConfirm";
import { AlertToast } from "../../components/Alerts/AlertToast";
import { getCustomersFromLocalStorage, removeCustomerFromLocalStorage } from "../../components/utils/LocalStorage/CustomersUtils";
import type { CustomersStorage } from "../../@types/customer";

export function Customers() {
  const [customers, setCustomers] = useState<CustomersStorage>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type?: "success" | "error" } | null>(null);

  useEffect(() => {
    const stored = getCustomersFromLocalStorage();
    setCustomers(stored);
  }, []);

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleDelete = () => {
    if (!selectedId) return;

    const success = removeCustomerFromLocalStorage(selectedId);
    if (success) {
      setToast({ message: "Aluno removido com sucesso", type: "success" });
      setCustomers(prev => prev.filter(c => c.id !== selectedId));
    } else {
      setToast({ message: "Erro ao remover aluno", type: "error" });
    }

    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <Container>
      <SideMenu />
      <TopBar placeholder="Pesquisar por alunos" />
      <MainContentContainer $repeatColumns={4}>
        <NewRegister entityName="Aluno" createPath="/newcustomer" buttonText="Novo aluno" />
        <CustomerCard customers={customers} onDelete={confirmDelete} />
      </MainContentContainer>

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
