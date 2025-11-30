import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AlertToast } from "../../../components/Alerts/AlertToast";
import { RoundedCard } from "../../../components/RoundedCard";
import { SideMenu } from "../../../components/SideMenu";
import {
  FlexibleContentContainer,
  Form,
} from "../../../components/utils/generic";
import {
  ButtonGroup,
  ButtonLabel,
} from "../../../components/utils/styleButton";

import { criarAluno } from "../../../services/customerService";
import type { AlunoRequest } from "../../../@types/customer";

interface NewCustomerForm {
  nome: string;
  idade: string;    
  email: string;
  telefone: string;
  plano: string;
}

export function NewCustomer() {
  const [formData, setFormData] = useState<NewCustomerForm>({
    nome: "",
    idade: "",
    email: "",
    telefone: "",
    plano: "",
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlanSelect = (plano: string) => {
    setFormData((prev) => ({ ...prev, plano }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.plano || !formData.idade) {
      setToast({
        message: "Preencha todos os campos obrigatórios!",
        type: "error",
      });
      return;
    }

    const idadeNumber = Number(formData.idade);
    if (Number.isNaN(idadeNumber) || idadeNumber <= 0) {
      setToast({
        message: "Informe uma idade válida.",
        type: "error",
      });
      return;
    }

    try {
      setIsLoading(true);
      setToast(null);

      const payload: AlunoRequest = {
        nome: formData.nome,
        idade: idadeNumber,
        email: formData.email,
        telefone: formData.telefone,
        plano: formData.plano,
      };

      await criarAluno(payload);

      setFormData({
        nome: "",
        idade: "",
        email: "",
        telefone: "",
        plano: "",
      });

      setToast({
        message: "Aluno cadastrado com sucesso!",
        type: "success",
      });

      setTimeout(() => navigate("/customers"), 1500);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error ? error.message : "Erro ao cadastrar aluno.";
      setToast({ message, type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SideMenu />
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="55rem">
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
              disabled={isLoading}
            />

            <label htmlFor="idade">Idade</label>
            <input
              type="number"
              name="idade"
              min={1}
              placeholder="Idade do aluno"
              value={formData.idade}
              onChange={handleChange}
              required
              disabled={isLoading}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              name="telefone"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={handleChange}
              disabled={isLoading}
            />

            <label>Planos</label>
            <div
              className={`optionBox ${
                formData.plano === "basico" ? "active" : ""
              }`}
              onClick={() => handlePlanSelect("basico")}
            >
              <input
                type="radio"
                name="plano"
                value="basico"
                checked={formData.plano === "basico"}
                readOnly
                hidden
              />
              <strong>Plano Básico</strong>
              <p>Acesso limitado às modalidades</p>
            </div>

            <div
              className={`optionBox ${
                formData.plano === "premium" ? "active" : ""
              }`}
              onClick={() => handlePlanSelect("premium")}
            >
              <input
                type="radio"
                name="plano"
                value="premium"
                checked={formData.plano === "premium"}
                readOnly
                hidden
              />
              <strong>Plano Premium</strong>
              <p>Acesso completo a todas as modalidades</p>
            </div>

            <ButtonGroup className="multipleButtons">
              <ButtonLabel type="submit" disabled={isLoading}>
                {isLoading ? "Salvando..." : "Salvar"}
              </ButtonLabel>
              <ButtonLabel
                type="button"
                onClick={() => navigate("/customers")}
                disabled={isLoading}
              >
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
