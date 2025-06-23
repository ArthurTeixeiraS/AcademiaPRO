import { TopBar } from "../../components/TopBar";
import { SideMenu} from "../../components/SideMenu";
import { MainContentContainer } from "../../components/utils/generic";
import { NewRegister } from "../../components/NewRegister";
import { ModalityCard } from "../../components/ModalityCard";

export function Modalities() {
    return(
        <>
        <TopBar placeholder="pesquisar por Modalidades"></TopBar>
        <SideMenu></SideMenu>
        <MainContentContainer $repeatColumns={4}> 
            <NewRegister entityName="Modalidade" createPath="/newmodality" buttonText="Nova modalidade"/>
            <ModalityCard></ModalityCard>
        </MainContentContainer>
        </>
    )
}