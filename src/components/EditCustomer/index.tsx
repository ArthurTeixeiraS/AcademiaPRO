import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para pegar o ID da URL
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { MainContentContainer } from "../../components/utils/generic";
import { RoundedCard } from "../../components/RoundedCard";
import { GenericForm } from "../../components/utils/GenericForm";

export function EditCustomer() {
  const { id } = useParams();
  const [aluno, setAluno] = useState<any>(null);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const alunoCadastro = {
      nome: "João da Silva",
      email: "joao@email.com",
      telefone: "(11) 91234-5678",
      selectedOption: "premium"
    };
    setAluno(alunoCadastro);
  }, [id]);

const handleSubmit = (data: Record<string, string>) => {
    setAluno(data);
    setMensagem("Alterações salvas com sucesso!");
    setTimeout(() => setMensagem(""), 3000);
  };


  if (!aluno) return <p>Carregando...</p>;

 return (
    <>
      <SideMenu />
      <TopBar />
      <MainContentContainer $repeatColumns={1}>
        <RoundedCard width="45rem" height="50rem">
          <GenericForm
            title="Editar Aluno"
            fields={[
              { label: 'Nome Completo', name: 'nome', placeholder: 'Digite o nome completo...', value: aluno.nome },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'exemplo@email.com', value: aluno.email },
              { label: 'Telefone', name: 'telefone', type: 'tel', placeholder: '(11) 99999-9999', value: aluno.telefone },
            ]}
            options={[
              { title: 'Plano Básico', description: 'Acesso limitado às modalidades', value: 'basico' },
              { title: 'Plano Premium', description: 'Acesso completo a todas as modalidades', value: 'premium' },
            ]}
            selectedOption={aluno.selectedOption}
            onSubmit={handleSubmit}
          />

          {mensagem && (
            <p style={{ color: "green", marginTop: "1rem", textAlign: "center" }}>{mensagem}</p>
          )}
        </RoundedCard>
      </MainContentContainer>
    </>
  );
}