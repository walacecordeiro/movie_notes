import { useState } from "react"
import { useAuth } from "../../hooks/auth"

import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { BackButton } from "../../components/backButton"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

export function Profile(){
    const { user, updateProfile } = useAuth()

    const [user_name, setName] = useState(user.user_name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    async function handleUpdate(){
        const user = {
            user_name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({user})
    }

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
                value={user_name}
                onChange={e => setName(e.target.value)}
                />

                <Input
                placeholder="Seu e-mail mais usado"
                type="text"
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
                />
                
                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
                />

                <Button buttonText="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}