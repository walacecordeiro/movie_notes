import { Container } from "./styles"

export function Link({text, link, ...rest}){
    return(
        <Container
        tabIndex="-1"
        type="button"
        {...rest}
        >
            <a href={link}>{text}</a>
        </Container>
    )
}