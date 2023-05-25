import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

import { Brand } from "../brand";
import { Input } from "../input";
import { BiSearchAlt } from "react-icons/bi";

export function Header() {
  const { signOut } =  useAuth()
  return (
    <Container>
      <div className="wrapper">
        <Link to="/">
          <Brand />
        </Link>

        <Input icon={BiSearchAlt} placeholder="Pesquisar pelo título" />

        <Profile>
          <div>
            <strong>Walace Cordeiro</strong>
            <a
            tabIndex="-1"
            onClick={signOut}
            >
              sair
            </a>
          </div>

          <Link to="/perfil">
            <img
              src="https://github.com/walacecordeiro.png"
              alt="Foto de perfil do usuário"
            />
          </Link>
        </Profile>
      </div>
    </Container>
  );
}
