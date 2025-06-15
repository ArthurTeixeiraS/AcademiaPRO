import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { FlexibleContentContainer } from "../../components/utils/generic";

export function DashBoard(){
    const username = localStorage.getItem('username');

    return (
        <>
            <TopBar></TopBar>
            <SideMenu></SideMenu>
            <FlexibleContentContainer>
                <div className="dashBoardTitle">
                    <h1>Bem-vindo, {username}</h1>
                    <p>Gerencie seus alunos, modalidades e agendamentos de forma simples e eficiênte!</p>
                </div>
                <div className="rowSection">
                    <RoundedCard width="95%" height="100%">
                    <>
                    teste
                    </>
                    </RoundedCard>
                    <RoundedCard width="95%" height="100%">
                    <>
                    </>
                    </RoundedCard>
                    <RoundedCard width="95%" height="100%">
                    <>
                    </>
                    </RoundedCard>
                    <RoundedCard width="95%" height="100%">
                    <>
                    </>
                    </RoundedCard>
                </div>
            </FlexibleContentContainer>
        </>
    )
}