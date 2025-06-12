import { TopBar } from "../../components/TopBar";
import { SideMenu} from "../../components/SideMenu";
import { MainContentContainer } from "../../components/utils/generic";
import { NewRegister } from "../../components/NewRegister";

export function Modalitys() {
    return(
        <>
        <TopBar placeholder="pesquisar por modalidades"></TopBar>
        <SideMenu></SideMenu>
        <MainContentContainer $repeatColumns={4}> 
            <NewRegister entityName="Modalidade" createPath="/newmodality" buttonText="Nova modalidade"/>
        </MainContentContainer>
        </>
    )
}