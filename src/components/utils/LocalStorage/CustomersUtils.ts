import type { Customer, CustomersStorage } from "../../../@types/customer";

//Serve para Editar ou Adicionar Alunos
export const saveCustomerToLocalStorage = (newCustomer: Customer) => {
  try {
    const storedCustomers = localStorage.getItem('customers');
    let customers: CustomersStorage = storedCustomers ? JSON.parse(storedCustomers) : [];
    
    if (!newCustomer.id){
        newCustomer.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
        customers = [...customers, newCustomer];
        
    } else {
        customers.forEach((customer, index) => {
            //Se os ID's são iguais, significa que está em modo de edição
            if (customer.id === newCustomer.id){
                customers[index] = newCustomer
                return;
            }          
        });
    }
    localStorage.setItem('customers', JSON.stringify(customers));
  } catch (error) {
    console.error('Erro ao salvar no localStorage: ', error);
  }
};

export const getCustomersFromLocalStorage = (): CustomersStorage => {
  try {
    const storedCustomers = localStorage.getItem('customers');
    return storedCustomers ? JSON.parse(storedCustomers) : [];
  } catch (error) {
    console.error('Erro ao ler do localStorage: ', error);
    return [];
  }
};

export const getCustomerById = (id: string): Customer | undefined => {
  try {
    const storedCustomers = localStorage.getItem('customers');
    if (!storedCustomers) return undefined;
    
    const customers: Customer[] = JSON.parse(storedCustomers);
    return customers.find(customer => customer.id === id);
  } catch (error) {
    console.error('Erro ao buscar customer: ', error);
    return undefined;
  }
};

export const removeCustomerFromLocalStorage = (id: string) : boolean => {
  try{
    const storedCustomers = localStorage.getItem('customers');
    if(!storedCustomers) return false;

    const customers: Customer[] = JSON.parse(storedCustomers);
    const updatedCustomers = customers.filter(customer => customer.id !== id);
    localStorage.setItem('customers', JSON.stringify(updatedCustomers))
    return true
  } catch (error) {
    console.error('Erro ao remover customer: ', error)
    return false
  }
}
