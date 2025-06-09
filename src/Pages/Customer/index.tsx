
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { Customer } from "../../components/Customer";   
import { Container } from "../../components/utils/generic";


export function Customers() {
    return(
        <Container>
            <SideMenu></SideMenu>
            <TopBar placeholder="Pesquisar por alunos"></TopBar>
            <Customer></Customer>
        </Container>
    )
}