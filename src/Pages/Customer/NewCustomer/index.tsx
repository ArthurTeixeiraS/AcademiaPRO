import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AlertToast } from "../../../components/Alerts/AlertToast";
import { RoundedCard } from "../../../components/RoundedCard";
import { SideMenu } from "../../../components/SideMenu";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";

import { saveCustomerToLocalStorage } from "../../../components/utils/LocalStorage/CustomersUtils";
import type { Customer } from "../../../@types/customer";

export function NewCustomer() {
  const [formData, setFormData] = useState<Omit<Customer, 'id'>>({
    nome: '',
    email: '',
    telefone: '',
    plano: '',
  });

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlanSelect = (plano: string) => {
    setFormData(prev => ({ ...prev, plano }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.plano) {
      setToast({ message: "Preencha todos os campos obrigatórios!", type: "error" });
      return;
    }

    const newCustomer: Customer = {
      ...formData,
      id: '',
    };

    saveCustomerToLocalStorage(newCustomer);

    setFormData({
      nome: '',
      email: '',
      telefone: '',
      plano: '',
    });

    setToast({ message: "Aluno cadastrado com sucesso!", type: "success" });

    setTimeout(() => navigate('/customers'), 2000);
  };

  return (
    <>
      <SideMenu />
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="50rem">
          <Form onSubmit={handleSubmit}>
            <h1>Cadastrar Novo Aluno</h1>

            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite o nome completo..."
              value={formData.nome}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              name="telefone"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={handleChange}
            />

            <label>Planos</label>
            <div
              className={`optionBox ${formData.plano === 'basico' ? 'active' : ''}`}
              onClick={() => handlePlanSelect('basico')}
            >
              <input type="radio" name="plano" value="basico" checked={formData.plano === 'basico'} onChange={() => {}} hidden />
              <strong>Plano Básico</strong>
              <p>Acesso limitado às modalidades</p>
            </div>

            <div
              className={`optionBox ${formData.plano === 'premium' ? 'active' : ''}`}
              onClick={() => handlePlanSelect('premium')}
            >
              <input type="radio" name="plano" value="premium" checked={formData.plano === 'premium'} onChange={() => {}} hidden />
              <strong>Plano Premium</strong>
              <p>Acesso completo a todas as modalidades</p>
            </div>

            <ButtonGroup className="multipleButtons">
              <ButtonLabel type="submit">Salvar Alterações</ButtonLabel>
              <ButtonLabel type="button" onClick={() => navigate('/customers')}>Cancelar</ButtonLabel>
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
