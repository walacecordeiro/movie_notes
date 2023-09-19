import { useState } from "react"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

import { Container, Form, Avatar } from "./styles"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { BackButton } from "../../components/backButton"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [user_name, setName] = useState(user.user_name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      user_name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <BackButton />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome de usuário"
          type="text"
          icon={FiUser}
          value={user_name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Seu e-mail mais usado"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button buttonText="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
