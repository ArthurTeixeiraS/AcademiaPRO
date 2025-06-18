import { useEffect, useState } from "react";
import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { FlexibleContentContainer } from "../../components/utils/generic";
import { getCustomersFromLocalStorage } from "../../components/utils/LocalStorage/CustomersUtils";
import { getModalitiesFromLocalStorage } from "../../components/utils/LocalStorage/ModalityUtils";


export function DashBoard(){
    const username = localStorage.getItem('username');
    const [totalAlunos, setTotalAlunos] = useState(0);
    const [totalModalidades, setTotalModalidades] = useState(0);

    useEffect(() => {
        const modalidades = getModalitiesFromLocalStorage();
        setTotalModalidades(modalidades.length);
    }, []);

      useEffect(() => {
    const alunos = getCustomersFromLocalStorage();
    setTotalAlunos(alunos.length);
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
                    <RoundedCard width="390%" height="100%" linkTo="/Customers">
                    <>
                    <h2>
                     Alunos cadastrados:<br />
                     {totalAlunos}</h2>
                    </>
                    </RoundedCard>
                </div>
                    <br></br>
                <div className="rowSection">
                    <RoundedCard width="390%" height="100%" linkTo="/Modalities">
                    <>
                    <h2>
                    Modalidades cadastradas:<br/>
                     {totalModalidades}</h2>
                    </>
                    </RoundedCard>
                </div>
                <br></br>
                <div className="rowSection">
                    <RoundedCard width="390%" height="100%" linkTo="/Schedule">
                    <>
                    <h2>Agendamentos do Mês</h2>
                    </>
                    </RoundedCard>
                </div>
                <br></br>
                <div className="rowSection">
                    <RoundedCard width="390%" height="100%" linkTo="/Customers">
                    <>
                    <h2>Alunos e planos</h2>
                    <h3>Básico: </h3>
                    <h3>Premium: </h3>
                    </>
                    </RoundedCard>
                </div>

            </FlexibleContentContainer>
        </>
    )
}