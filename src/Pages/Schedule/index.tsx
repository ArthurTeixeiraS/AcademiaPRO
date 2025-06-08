import { MainSchedule } from "../../components/Schedule";
import {TopBar} from "../../components/TopBar";


export function Schedule() {
    return(
        <>
        <TopBar placeholder="Pesquisar por agendamentos"></TopBar>
        <MainSchedule></MainSchedule>
        </>
    )
}