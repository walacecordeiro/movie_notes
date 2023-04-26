import { Container } from "./styles";

export function Brand({title="RocketMovies", caption}){
    return(
        <Container>
            <h2 className="brand">{title}</h2>
            <span>{caption}</span>
        </Container>
    )
}