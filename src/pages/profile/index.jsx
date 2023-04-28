import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { BackButton } from "../../components/backButton"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

export function Profile(){
    return (
        <Container>
            <header>
                <BackButton />
            </header>

            <Form>

                <Avatar>
                    
                    <img
                    src="https://github.com/walacecordeiro.png"
                    alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                        id="avatar"
                        type="file"
                        />

                    </label>
                </Avatar>

                <Input
                placeholder="Nome de usuário"
                type="text"
                icon={FiUser}
                />

                <Input
                placeholder="Seu e-mail mais usado"
                type="text"
                icon={FiMail}
                />

                <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                />
                
                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                />

                <Button buttonText="Salvar" />
            </Form>
        </Container>
    )
}