// src/Pages/CadastroModalidade/index.tsx
import { useState } from "react";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
} from "./styles";
import { RoundedCard } from "../../components/RoundedCard";
import { TopBar } from "../../components/TopBar";
import { SideMenu } from "../../components/SideMenu";

export function CadastroModalidade() {
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
    <>
      <TopBar />
      <SideMenu />
      <Container>
        <RoundedCard width="40rem" height="auto">
          <Title>Cadastro de Modalidade</Title>
          <Form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="nome">Nome da Modalidade</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="descricao">Descrição</Label>
              <Input
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </RoundedCard>
      </Container>
    </>
  );
}
