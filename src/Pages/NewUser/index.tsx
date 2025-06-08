import { GenericForm } from "../../components/GenericForm";

export function NewUser() {
  return (
    <GenericForm
      title="Cadastrar Novo Aluno"
      fields={[
        { label: 'Nome Completo', name: 'nome', placeholder: 'Digite o nome completo...' },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'exemplo@email.com' },
        { label: 'Telefone', name: 'telefone', type: 'tel', placeholder: '(11) 99999-9999' },
      ]}
      options={[
        { title: 'Plano Básico', description: 'Acesso limitado às modalidades', value: 'basico' },
        { title: 'Plano Premium', description: 'Acesso completo a todas as modalidades', value: 'premium' },
      ]}
      onSubmit={(data) => console.log('Aluno cadastrado:', data)}
    />
  );
}
