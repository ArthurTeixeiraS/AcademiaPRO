import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Para pegar o ID da URL
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { MainContentContainer } from "../../components/utils/generic";
import { RoundedCard } from "../../components/RoundedCard";
import { getCustomerById } from "../../components/utils/LocalStorage/CustomersUtils";
import type { Customer } from "../../@types/customer";

export function EditCustomerUser() {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundCustomer = getCustomerById(id);
      if (foundCustomer) {
        setCustomer(foundCustomer);
      } else {
        // Redirecionar se não encontrar
        navigate('/customers');
      }
    }
  }, [id, navigate]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setCustomer(prev => {
  //     if (!prev) return prev;
  //     return { ...prev, [name]: value }});
  // } 

  // const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!customer) {
  //       alert('Dados do aluno não carregados corretamente');
  //       return;
  //     }
  //     saveCustomerToLocalStorage(customer);
  //     navigate('/Customers');
  // }

  if (!customer) return <h2>Carregando...</h2>;

 return (
    <>
      <SideMenu />
      <TopBar />
      <MainContentContainer $repeatColumns={1}>
        <RoundedCard width="45rem" height="50rem">
          <h1>Opa</h1>
          {/* <GenericForm
            title="Editar Aluno"
            fields={[
              { label: 'Nome Completo', name: 'nome', placeholder: 'Digite o nome completo...', value: customer.nome },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'exemplo@email.com', value: customer.email },
              { label: 'Telefone', name: 'telefone', type: 'tel', placeholder: '(11) 99999-9999', value: customer.telefone },
            ]}
            options={[
              { title: 'Plano Básico', description: 'Acesso limitado às modalidades', value: 'basico' },
              { title: 'Plano Premium', description: 'Acesso completo a todas as modalidades', value: 'premium' },
            ]}
            onSubmit={handleSubmit}
            onChange={handleChange}
          /> */}
        </RoundedCard>
      </MainContentContainer>
    </>
  );
}