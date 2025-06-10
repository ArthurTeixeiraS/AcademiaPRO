import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { FlexibleContentContainer } from "../../components/utils/generic";

export function DashBoard(){
    return (
        <>
            <TopBar></TopBar>
            <SideMenu></SideMenu>
            <FlexibleContentContainer>
                <RoundedCard width="47%" height="10%" isLarge={true}>
                    <h1>Bem vindo, Professor</h1>
                    <p>Nesse Dashboard, estão disponíveis dados rápidos e atalhos para suas funções preferidas!</p>
                </RoundedCard> 
                <div className="rowSection">
                    <RoundedCard width="95%" height="100%">
                    <></>
                    </RoundedCard>
                    <RoundedCard width="95%" height="100%">
                    <></>
                    </RoundedCard>
                    <RoundedCard width="95%" height="100%">
                    <></>
                    </RoundedCard>
                    <RoundedCard width="95%" height="100%">
                    <></>
                    </RoundedCard>
                </div>
            </FlexibleContentContainer>
        </>
    )
}