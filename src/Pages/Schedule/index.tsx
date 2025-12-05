import { ScheduleCard } from "../../components/ScheduleCard";
import { SideMenu } from "../../components/SideMenu";
import { MainContentContainer } from "../../components/utils/generic";
import { NewRegister } from "../../components/NewRegister";

export function Schedule() {
    return(
        <>
        <SideMenu></SideMenu>
          <MainContentContainer $repeatColumns={4}> 
              <NewRegister entityName="Cadastre um novo Agendamento" createPath="/newschedule" buttonText="Novo agendamento"/>
              <ScheduleCard></ScheduleCard>
          </MainContentContainer>
        </>
    )
}