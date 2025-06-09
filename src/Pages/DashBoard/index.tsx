import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { Container } from "../../components/utils/generic";
import { MainContentContainer } from "../../components/utils/generic";

export function DashBoard(){
    return (
        <Container>
            <TopBar></TopBar>
            <SideMenu></SideMenu>
            <MainContentContainer $repeatColumns={2}>
                <RoundedCard width="95%" height="16.8rem" backgroundColor="#081534" color="#ffffff">
                    <h1>Bem vindo, Professor</h1>
                    <p>Nesse Dashboard, estão disponíveis dados rápidos e atalhos para suas funções preferidas!</p>
                </RoundedCard>
                <RoundedCard width="95%" height="16.8rem" backgroundColor="#ffffff" color="#081534">
                    <h1>Bem vindo, Professor</h1>
                    <p>Nesse Dashboard, estão disponíveis dados rápidos e atalhos para suas funções preferidas!</p>
                </RoundedCard>
                <RoundedCard width="95%" height="16.8rem" backgroundColor="#ffffff" color="#081534">
                    <h1>Bem vindo, Professor</h1>
                    <p>Nesse Dashboard, estão disponíveis dados rápidos e atalhos para suas funções preferidas!</p>
                </RoundedCard>
            </MainContentContainer>
        </Container>
    )
}