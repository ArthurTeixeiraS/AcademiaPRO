import { RoundedCard } from "../RoundedCard"
import { useState } from "react";
import { Title, Button } from "./styles";
import { MainContentContainer } from "../utils/generic";
import { Form } from "../utils/generic";

export function NewModalityForm() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Modalidade cadastrada:", { nome, descricao });
        alert("Modalidade cadastrada com sucesso!");
        setNome("");
        setDescricao("");
    };

    return (
        // Pendente/Revisar -> Tem que achar alguma forma de centralizar isso em relação ao "mainContainer"
        // Acho que consigo resolver criando um Container genérico de display flex
        <MainContentContainer $repeatColumns={1}>
        <RoundedCard width="40rem" height="26rem">
          <Title>Cadastro de Modalidade</Title>
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome da Modalidade</label>
              <input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="descricao">Descrição</label>
              <input
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </RoundedCard>
      </MainContentContainer>
    )
}