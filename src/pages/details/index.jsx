import { Container } from "./styles"

import { BackButton } from "../../components/backButton"

export function Details(){
    return(
        <Container>
            <BackButton buttonText="voltar" />
            <h1>Interestellar</h1>
            <span>iniciando projeto</span>
        </Container>
    )
}