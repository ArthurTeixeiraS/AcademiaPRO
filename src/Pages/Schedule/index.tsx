import { MainSchedule } from "../../components/Schedule";
import {TopBar} from "../../components/TopBar";
import { SideMenu } from "../../components/SideMenu";
import { MainContentContainer } from "../../components/utils/generic";
import { NewRegister } from "../../components/NewRegister";

export function Schedule() {
    return(
        <>
        <TopBar placeholder="Pesquisar por agendamentos"></TopBar>
        <SideMenu></SideMenu>
          <MainContentContainer $repeatColumns={4}> 
                       <NewRegister entityName="Agendamentos" createPath="/newschedule" buttonText="Novo agendamento"/>
                       <MainSchedule></MainSchedule>
                      </MainContentContainer>
       
        </>
    )
}