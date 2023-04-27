import { Container, Profile } from "./styles";
import { Brand } from "../brand";
import { Input } from "../input";
import { BiSearchAlt } from "react-icons/bi";

export function Header() {
  return (
    <Container>
      <div className="wrapper">
        <Brand />

        <Input icon={BiSearchAlt} placeholder="Pesquisar pelo título" />

        <Profile>
          <div>
            <strong>Walace Cordeiro</strong>
            <a tabIndex="-1" href="#">sair</a>
          </div>
          <img
            src="https://github.com/walacecordeiro.png"
            alt="Foto de perfil do usuário"
          />
        </Profile>
      </div>
    </Container>
  );
}
