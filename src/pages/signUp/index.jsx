import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Brand } from "../../components/brand";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { Link } from "../../components/link"

export function SignUp() {
  return (
    <Container>
      <Form>
        <Brand caption="Aplicação para acompanhar tudo que assistir"/>

        <h2>Faça seu login</h2>

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

        <Link icon={FiArrowLeft} text="Voltar para o login" link="#"/>
      </Form>

      <Background />
    </Container>
  );
}
