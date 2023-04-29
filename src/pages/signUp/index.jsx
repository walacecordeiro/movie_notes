import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Brand } from "../../components/brand";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextLink } from "../../components/textLink"

export function SignUp() {
  return (
    <Container>
      <Form>
        <Brand caption="Aplicação para acompanhar tudo que assistir"/>

        <h2>Crie sua conta</h2>

        <Input 
        type="text"
        placeholder="Nome"
        icon={FiUser}
        />

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

        <Button buttonText="Cadastrar"/>

        <TextLink icon={FiArrowLeft} text="Voltar para o login" route="/login"/>
      </Form>

      <Background />
    </Container>
  );
}
