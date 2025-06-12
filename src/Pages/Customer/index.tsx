
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { Container, MainContentContainer } from "../../components/utils/generic";
import { CustomerCard } from "../../components/CustomerCard";
import { NewRegister } from "../../components/NewRegister";


export function Customers() {
    return(
        <Container>
            <SideMenu></SideMenu>
            <TopBar placeholder="Pesquisar por alunos"></TopBar>
            <MainContentContainer $repeatColumns={4}> 
                <NewRegister entityName="Aluno" createPath="/newcustomer" buttonText="Novo aluno"/>
                <CustomerCard></CustomerCard>
            </MainContentContainer>
        </Container>
    )
}