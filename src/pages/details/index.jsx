import { Container } from "./styles"

import { BackButton } from "../../components/backButton"
import { MovieTitle } from "../../components/movieTitle"
import { Rating } from "../../components/rating"

export function Details(){
    return(
        <Container>
            <BackButton buttonText="Voltar" />
            <MovieTitle title="Interestellar" />
            <Rating rating={4} />
        </Container>
    )
}