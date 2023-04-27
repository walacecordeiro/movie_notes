import { Container } from "./styles";

export function MovieTitle({title, ...rest}){
    return (
        <Container {...rest}>
            <span>{title}</span>
        </Container>
    )
}