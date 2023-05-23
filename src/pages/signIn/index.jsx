import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi"

import { Brand } from "../../components/brand";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextLink } from "../../components/textLink"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()

  function handleLogin(){
    if(!email || !password){
      return alert("É necessário preencher todos os campos para autenticar")
    }
    login({ email, password })
  }

  return (
    <Container>
      <Form>
        <Brand caption="Aplicação para acompanhar tudo que assistir"/>

        <h2>Faça seu login</h2>

        <Input 
        type="text"
        placeholder="E-mail"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        type="password"
        placeholder="Senha"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

        <Button buttonText="Entrar" onClick={handleLogin}/>

        <TextLink text="Criar conta" route="/registrar"/>
      </Form>

      <Background />
    </Container>
  );
}
