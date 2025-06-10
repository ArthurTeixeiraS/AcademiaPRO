import { AlunosCard } from "../AlunoCard/index.tsx";
import { RoundedCard } from "../RoundedCard/index.tsx";
import { MainContentContainer } from "../utils/generic.ts";
import { CardInfo } from "../AlunoCard/styles.ts";
import { ButtonLabel } from "../utils/styleButton.ts";
import { Link } from "react-router-dom";

export function Customer() {

  return (
      <MainContentContainer $repeatColumns={4}> 
        <AlunosCard></AlunosCard>
        <RoundedCard width="30rem" height="22rem" isLarge={false}>
            <div className="notFoundUser">
              <h2>Não encontrou?</h2>
              <CardInfo>Cadastre um novo aluno!</CardInfo>
              <Link to="/newcustomer">
                  <ButtonLabel>Novo aluno</ButtonLabel>
              </Link>
            </div>
        </RoundedCard>
      </MainContentContainer>
  );
}
