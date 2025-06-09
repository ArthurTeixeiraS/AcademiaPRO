import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { MainContentContainer } from "../../components/utils/generic";
import { GenericForm } from "../../components/utils/GenericForm";

export function NewCustomer() {
  return (
    <>
      <SideMenu/>
      <TopBar/>
      {/* Revisar / Preciso Criar um novo Container para telas de cadastro que terão apenas um form centralizado */}
      <MainContentContainer $repeatColumns={1}>
          <RoundedCard width="45rem" height="50rem">
            <GenericForm
              title="Cadastrar Novo Aluno"
              //Isso passa um Array de objetos que definem os campos do Form
              fields={[
                { label: 'Nome Completo', name: 'nome', placeholder: 'Digite o nome completo...' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'exemplo@email.com' },
                { label: 'Telefone', name: 'telefone', type: 'tel', placeholder: '(11) 99999-9999' },
              ]}
              //Isso passa um Array de objetos que definem as opções do Form
              options={[
                { title: 'Plano Básico', description: 'Acesso limitado às modalidades', value: 'basico' },
                { title: 'Plano Premium', description: 'Acesso completo a todas as modalidades', value: 'premium' },
              ]}
              onSubmit={(data) => console.log('Aluno cadastrado:', data)}
            />
          </RoundedCard>
      </MainContentContainer>
    </>
  );
}
