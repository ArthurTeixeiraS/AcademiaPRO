import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { Container, MainContentContainer } from "../../components/utils/generic";

export function DashBoard(){
    return (
        <Container>
            <TopBar></TopBar>
            <SideMenu></SideMenu>
            <MainContentContainer $repeatColumns={1}>
                <RoundedCard width="95%" height="20%">
                    <h1>Bem vindo, Professor</h1>
                    <p>Nesse Dashboard, estão disponíveis dados rápidos e atalhos para suas funções preferidas!</p>
                </RoundedCard>
                <RoundedCard>
                <></>
                </RoundedCard>
            </MainContentContainer>
        </Container>
    )
}