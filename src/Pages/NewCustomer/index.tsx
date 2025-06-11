import { RoundedCard } from "../../components/RoundedCard";
import { SideMenu } from "../../components/SideMenu";
import { TopBar } from "../../components/TopBar";
import { FlexibleContentContainer, Form } from "../../components/utils/generic";
import { ButtonGroup, ButtonLabel } from "../../components/utils/styleButton";

export function NewCustomer() {
  return (
    <>
      <SideMenu/>
      <TopBar/>
      <FlexibleContentContainer>
          <RoundedCard width="45rem" height="50rem">
            <Form>
              <h1>Cadastrar Novo Aluno</h1>
                <label htmlFor="nome">Nome Completo</label>
                  <input type="text" name="nome" placeholder="Digite o nome Completo..."/>
                <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="exemplo@email.com" />
                <label htmlFor="telefone">Telefone</label>
                  <input type="tel" name="telefone" placeholder="(11) 99999-9999"/>
                <label htmlFor="">Planos</label>
                <div className="optionBox">
                  <input type="radio" name="plano" value='basico' hidden/>
                  <strong>Plano Básico</strong>
                  <p>Acesso limitado ás modalidades</p>
                </div>
                <div className="optionBox">
                  <input type="radio" name="plano" value='premium' hidden/>
                  <strong>Plano Básico</strong>
                  <p>Acesso limitado ás modalidades</p>
                </div>

                <ButtonGroup className='multipleButtons'>
                  <ButtonLabel type="submit">Salvar Alterações</ButtonLabel>
                  <ButtonLabel type="button" onClick={() => window.history.back()}>Cancelar</ButtonLabel>
                </ButtonGroup>
            </Form>
          </RoundedCard>
      </FlexibleContentContainer>
    </>
  );
}
