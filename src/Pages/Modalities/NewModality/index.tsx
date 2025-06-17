import { useState } from "react";
import { AlertToast } from "../../../components/Alerts/AlertToast";
import { RoundedCard } from "../../../components/RoundedCard";
import { SideMenu } from "../../../components/SideMenu";
import { TopBar } from "../../../components/TopBar";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";
import type { Modality } from "../../../@types/modality";
import { saveModalityToLocalStorage } from "../../../components/utils/LocalStorage/ModalityUtils";
import { useNavigate } from "react-router-dom";

export function NewModality() {
  const [formData, setFormData] = useState<Omit<Modality, 'id'>>({
    nome: '',
    descricao: '',
    capacidade: 0,
    publicoAlvo: '',
  });

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();

  const handlePublicSelect = (publicoAlvo: string) => {
    setFormData(prev => ({ ...prev, publicoAlvo }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === "capacidade" ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.descricao.trim() || formData.capacidade <= 0 || !formData.publicoAlvo) {
      setToast({ message: "Preencha todos os campos obrigatórios!", type: "error" });
      return;
    }

    const newModality: Modality = {
      ...formData,
      id: '',
    };

    saveModalityToLocalStorage(newModality);

    setToast({ message: "Modalidade cadastrada com sucesso!", type: "success" });

    setTimeout(() => {
      navigate("/modalities");
    }, 1500);
  };

  return (
    <>
      <SideMenu />
      <TopBar />
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="67rem">
          <Form onSubmit={handleSubmit}>
            <h1>Cadastrar Nova Modalidade</h1>

            <label>Nome da Modalidade</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome da modalidade..."
              required
              autoComplete="off"
            />

            <label>Descrição</label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Digite a descrição..."
              required
            />

            <label>Capacidade (pessoas)</label>
            <input
              type="number"
              name="capacidade"
              value={formData.capacidade}
              onChange={handleChange}
              placeholder="Digite a capacidade..."
              required
            />

            <label>Público-alvo</label>

            <div className={`optionBox ${formData.publicoAlvo === 'infantil' ? 'active' : ''}`} onClick={() => handlePublicSelect('infantil')}>
              <input type="radio" name="publicoAlvo" value="infantil" checked={formData.publicoAlvo === 'infantil'} onChange={() => {}} hidden />
              <strong>Infantil</strong>
              <p>Atividades lúdicas e educativas</p>
            </div>

            <div className={`optionBox ${formData.publicoAlvo === 'adulto' ? 'active' : ''}`} onClick={() => handlePublicSelect('adulto')}>
              <input type="radio" name="publicoAlvo" value="adulto" checked={formData.publicoAlvo === 'adulto'} onChange={() => {}} hidden />
              <strong>Jovem-Adulto</strong>
              <p>Exercícios de resistência e flexibilidade</p>
            </div>

            <div className={`optionBox ${formData.publicoAlvo === 'idoso' ? 'active' : ''}`} onClick={() => handlePublicSelect('idoso')}>
              <input type="radio" name="publicoAlvo" value="idoso" checked={formData.publicoAlvo === 'idoso'} onChange={() => {}} hidden />
              <strong>Idoso</strong>
              <p>Exercícios de baixo impacto e fortalecimento</p>
            </div>

            <ButtonGroup className="multipleButtons">
              <ButtonLabel type="submit">Salvar</ButtonLabel>
              <ButtonLabel type="button" onClick={() => navigate("/modalities")}>Cancelar</ButtonLabel>
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
