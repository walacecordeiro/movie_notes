import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Brand } from "../../components/brand";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextLink } from "../../components/textLink"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [user_name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!user_name || !email || !password){
      return alert("É necessário preencher todos os campos")
    }

    api.post("/users", { user_name, email, password })
    .then(() => {
      alert("Cadastrado com sucesso! agora basta fazer login")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível cadastrar")
      }
    })
  }

  return (
    <Container>
      <Form>
        <Brand caption="Aplicação para acompanhar tudo que assistir"/>

        <h2>Crie sua conta</h2>

        <Input 
        type="text"
        placeholder="Nome"
        icon={FiUser}
        onChange={e => setName(e.target.value)}
        />

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

        <Button buttonText="Cadastrar" onClick={handleSignUp}/>

        <TextLink icon={FiArrowLeft} text="Voltar para o login" route="/"/>
      </Form>

      <Background />
    </Container>
  );
}
