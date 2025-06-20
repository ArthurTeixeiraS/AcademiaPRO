import { useEffect, useState } from "react";
import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { FlexibleContentContainer } from "../../components/utils/generic";
import { getCustomersFromLocalStorage } from "../../components/utils/LocalStorage/CustomersUtils";
import { getModalitiesFromLocalStorage } from "../../components/utils/LocalStorage/ModalityUtils";
import { getSchedulesFromLocalStorage } from "../../components/utils/LocalStorage/ScheduleUtils";


export function DashBoard(){
    const username = localStorage.getItem('username');
    const [totalAlunos, setTotalAlunos] = useState(0);
    const [totalModalidades, setTotalModalidades] = useState(0);
    const [totalAgendamentos, setTotalAgendamentos] = useState(0);

    useEffect(() => {
        const modalidades = getModalitiesFromLocalStorage();
        setTotalModalidades(modalidades.length);

        const alunos = getCustomersFromLocalStorage();
        setTotalAlunos(alunos.length);

        const agendamentos = getSchedulesFromLocalStorage();
        setTotalAgendamentos(agendamentos.length)
    }, []);

    return (
        <>
            <TopBar></TopBar>
            <SideMenu></SideMenu>
            <FlexibleContentContainer>
                <div className="dashBoardTitle">
                    <h1>Bem-vindo, {username}</h1>
                    <p>Gerencie seus alunos, modalidades e agendamentos de forma simples e eficiente!</p>
                </div>
                <div className="rowSection">
                    <RoundedCard width="90%" height="100%" linkTo="/Customers">
                        <h2>
                            Temos {totalAlunos? totalAlunos : 0} alunos cadastrados!
                        </h2>
                    </RoundedCard>
                    <RoundedCard width="90%" height="100%" linkTo="/Modalities">
                        <h2>
                            Temos {totalModalidades? totalModalidades : 0} modalidades cadastradas!
                        </h2>
                    </RoundedCard>
                    <RoundedCard width="90%" height="100%" linkTo="/Schedule">
                        <h2>
                            Temos {totalAgendamentos? totalAgendamentos : 0} agendamentos cadastrados!
                        </h2>
                    </RoundedCard>
                </div>

            </FlexibleContentContainer>
        </>
    )
}