import { Container, Profile } from "./styles";
import { Input } from "../input";
import { BiSearchAlt } from "react-icons/bi"

export function Header(){
    return(
        <Container>
            <Input icon={BiSearchAlt} placeholder="Pesquisar pelo título"/>

            <Profile>
                <div>
                    <strong>Walace Cordeiro</strong>
                    <a href="#">sair</a>
                </div>
                <img src="https://github.com/walacecordeiro.png" alt="Foto de perfil do usuário" />
            </Profile>
        </Container>
    )
}