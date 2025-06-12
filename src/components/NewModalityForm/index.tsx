import { RoundedCard } from "../RoundedCard"
import { useState } from "react";
import { Title, Button } from "./styles";
import { FlexibleContentContainer } from "../utils/generic";
import { Form } from "../utils/generic";

export function NewModalityForm() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [capacidade, setCapacidade] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Modalidade cadastrada:", { nome, descricao });
        alert("Modalidade cadastrada com sucesso!");
        setNome("");
        setDescricao("");
    };

    return (
        <FlexibleContentContainer>
        <RoundedCard width="40rem" height="26rem" isLarge={false}>
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
             <div>
              <label htmlFor="capacidade">Capacidade (pessoas)</label>
              <input
                id="capacidade"
                value={capacidade}
                onChange={(e) => setCapacidade(e.target.value)}
              />
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </RoundedCard>
      </FlexibleContentContainer>
    )
}