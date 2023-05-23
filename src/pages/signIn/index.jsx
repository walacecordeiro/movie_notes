import { useContext } from "react";
import { LoggedContext } from "../../loggedContext";

import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi"

import { Brand } from "../../components/brand";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextLink } from "../../components/textLink"

export function SignIn() {
  const data = useContext(LoggedContext)
  console.log(data)
  return (
    <Container>
      <Form>
        <Brand caption="Aplicação para acompanhar tudo que assistir"/>

        <h2>Faça seu login</h2>

        <Input 
        type="text"
        placeholder="E-mail"
        icon={FiMail}
        />

        <Input 
        type="password"
        placeholder="Senha"
        icon={FiLock}
        />

        <Button buttonText="Entrar"/>

        <TextLink text="Criar conta" route="/registrar"/>
      </Form>

      <Background />
    </Container>
  );
}
