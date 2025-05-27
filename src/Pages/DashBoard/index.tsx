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
                <RoundedCard width="" height="80%">
                    <h1>Olá</h1>
                    <p>Paulo Bobão</p>
                </RoundedCard>
                <RoundedCard width="80%" height="80%">
                    <h1>Olá</h1>
                    <p>Paulo Bobão</p>
                </RoundedCard>
                <RoundedCard width="80%" height="80%">
                    <h1>Olá</h1>
                    <p>Paulo Bobão</p>
                </RoundedCard>
                <RoundedCard width="80%" height="80%">
                    <h1>Olá</h1>
                    <p>Paulo Bobão</p>
                </RoundedCard>
                <RoundedCard width="80%" height="80%">
                    <h1>Olá</h1>
                    <p>Paulo Bobão</p>
                </RoundedCard>
                <RoundedCard width="80%" height="80%">
                    <h1>Olá</h1>
                    <p>Paulo Bobão</p>
                </RoundedCard>
            </MainContentContainer>
        </Container>
    )
}