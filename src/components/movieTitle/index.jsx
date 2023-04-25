import { Container } from "./styles";

export function MovieTitle({title, ...rest}){
    return (
        <Container {...rest}>
            <h1>{title}</h1>
        </Container>
    )
}