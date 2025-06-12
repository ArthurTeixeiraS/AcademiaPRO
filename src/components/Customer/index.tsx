import { CustomerCard } from "../AlunoCard/index.tsx";
import { MainContentContainer } from "../utils/generic.ts";
import { NewRegister } from "../NewRegister/index.tsx";



export function Customer() {

  return (
      <MainContentContainer $repeatColumns={4}> 
       <NewRegister entityName="Aluno" createPath="/newcustomer" buttonText="Novo aluno"/>
        <CustomerCard></CustomerCard>
      </MainContentContainer>
  );
}
