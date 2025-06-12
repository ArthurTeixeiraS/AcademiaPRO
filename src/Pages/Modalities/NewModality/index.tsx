import { TopBar } from "../../../components/TopBar";
import { SideMenu } from "../../../components/SideMenu";
import { FlexibleContentContainer, Form } from "../../../components/utils/generic";
import { RoundedCard } from "../../../components/RoundedCard";
import { ButtonGroup, ButtonLabel } from "../../../components/utils/styleButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Modality } from "../../../@types/modality";
import { saveModalityToLocalStorage } from "../../../components/utils/LocalStorage/ModalityUtils";

export function NewModality() {
  const [formData, setFormData] = useState<Omit<Modality, 'id'>>({
    nome: '',
    descricao: '',
    capacidade: 0,
    publicoAlvo: '',
  });

  const navigate = useNavigate();

  const handlePublicSelect = (publicoAlvo: string) => {
    setFormData(prev => ({ ...prev, publicoAlvo }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.descricao || (formData.capacidade === 0) || !formData.publicoAlvo) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    const newModality: Modality = {
      ...formData,
      id: '',
    };

    saveModalityToLocalStorage(newModality);

    setFormData({
      nome: '',
      descricao: '',
      capacidade: 0,
      publicoAlvo: '',
    });

    alert('Modalidade cadastrada com sucesso!');
    navigate('/modalities')
  }  

  return (
    <>
      <TopBar/>
      <SideMenu/>
      <FlexibleContentContainer>
        <RoundedCard width="45rem" height="67rem">
          <Form onSubmit={handleSubmit}>
            <h1>Cadastro de Modalidade</h1>
            <div>
              <label htmlFor="nome">Nome da Modalidade</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite o nome da Modalidade..."
                value={formData.nome}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="descricao">Descrição</label>
              <textarea
                name="descricao"
                placeholder="Digite a descrição da modalidade"
                value={formData.descricao}
                onChange={handleChange}
                required
              />
            </div>
             <div>
              <label htmlFor="capacidade">Capacidade (pessoas)</label>
              <input
                type="number"
                name="capacidade"
                placeholder="Selecione a capacidade de alunos da modalidade"
                value={formData.capacidade}
                onChange={handleChange}
                required
              />
            </div>
            <label>Público-alvo</label>
                <div 
                  className={`optionBox ${formData.publicoAlvo === 'infantil' ? 'active' : ''}`}
                  onClick={() => handlePublicSelect('infantil')}
                > 
                  <input 
                    type="radio" 
                    name="publico-alvo" 
                    value='infantil' 
                    checked={formData.publicoAlvo === 'infantil'}
                    onChange={() => {}}
                    hidden
                  />
                  <h3>Público Infântil</h3>
                  <p>Atividades lúdicas e focadas no desenvolvimento da criança</p>
                </div>
                <div 
                  className={`optionBox ${formData.publicoAlvo === 'adulto' ? 'active' : ''}`}
                  onClick={() => handlePublicSelect('adulto')}
                >
                  <input 
                    type="radio" 
                    name="publico-alvo" 
                    value='adulto' 
                    checked={formData.publicoAlvo === 'adulto'}
                    onChange={() => {}}
                    hidden
                  />
                  <h3>Público Jovem-Adulto</h3>
                  <p>Inclui exercícios aeróbicos, de resistência e que promovem flexibilidade</p>
                </div>
                <div 
                  className={`optionBox ${formData.publicoAlvo === 'idoso' ? 'active' : ''}`}
                  onClick={() => handlePublicSelect('idoso')}
                >
                  <input 
                    type="radio" 
                    name="publico-alvo" 
                    value='idoso' 
                    checked={formData.publicoAlvo === 'idoso'}
                    onChange={() => {}}
                    hidden
                  />
                  <h3>Público Idoso</h3>
                  <p>Atividades de baixo impacto, que promovem fortalecimento e saúde</p>
                </div>

            <ButtonGroup className='multipleButtons'>
              <ButtonLabel type="submit">Salvar Alterações</ButtonLabel>
              <ButtonLabel type="button" onClick={() => navigate('/modalities')}>Cancelar</ButtonLabel>
            </ButtonGroup>
          </Form>
        </RoundedCard>
      </FlexibleContentContainer>
    </>
  );
}
