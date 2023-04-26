import { Container, Profile } from "./styles";

export function Header(){
    return(
        <Container>
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