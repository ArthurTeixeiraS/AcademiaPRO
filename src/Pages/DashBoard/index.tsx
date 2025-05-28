import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { Container, MainContentContainer } from "./styles";

export function DashBoard(){
    return (
        <Container>
            <TopBar></TopBar>
            <SideMenu></SideMenu>
            <MainContentContainer>
                <RoundedCard>
                    <h1>Bem vindo, {'{Usuário}'}</h1>
                    <p>Nesse Dashboard, estão disponíveis dados rápidos e atalhos para suas funções preferidas!</p>
                </RoundedCard>
            </MainContentContainer>
        </Container>
    )
}