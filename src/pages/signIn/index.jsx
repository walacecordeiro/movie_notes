import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi"

import { Brand } from "../../components/brand";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { Link } from "../../components/link"

export function SignIn() {
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

        <Link text="Criar conta" link="#"/>
      </Form>

      <Background />
    </Container>
  );
}
