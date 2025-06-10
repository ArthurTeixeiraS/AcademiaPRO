import React, { useState } from "react";
import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { FlexibleContentContainer } from "../../components/utils/generic";
import { GenericForm } from "../../components/utils/GenericForm";
import type { Customer } from "../../@types/customer";
import { saveCustomerToLocalStorage } from "../../components/utils/localStorageUtils";

export function NewCustomer() {

  //Esse "Omit" serve pra omitir um atributo de um determinado type, nesse caso o "id"
  const [customer, setCustomer] = useState<Omit<Customer, 'id'>>({
    nome: '',
    email: '',
    telefone: '',
    plano: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setCustomer(prev => ({ ...prev, [name]: value }));
  } 

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const newCustomer: Customer = {
        ...customer,
        id: ''
      };

      saveCustomerToLocalStorage(newCustomer);
      setCustomer({nome: '', email: '', telefone: '', plano: '',}) 
  }

  return (
    <>
      <SideMenu/>
      <TopBar/>
      <FlexibleContentContainer>
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
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </RoundedCard>
      </FlexibleContentContainer>
    </>
  );
}
