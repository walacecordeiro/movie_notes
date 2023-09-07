import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

import { Brand } from "../brand";
import { Input } from "../input";
import { BiSearchAlt } from "react-icons/bi";

export function Header({ search }) {
  const { signOut, user } =  useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <div className="wrapper">
        <Link to="/">
          <Brand />
        </Link>

        <Input icon={BiSearchAlt} placeholder="Pesquisar pelo título" onChange={search}/>

        <Profile>
          <div>
            <strong>{user.user_name}</strong>
            <a
            tabIndex="-1"
            onClick={signOut}
            >
              sair
            </a>
          </div>

          <Link to="/perfil">
            <img
              src={avatarUrl}
              alt={user.name}
            />
          </Link>
        </Profile>
      </div>
    </Container>
  );
}
