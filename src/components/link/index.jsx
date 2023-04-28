import { Container } from "./styles"

export function Link({icon: Icon, text, link, ...rest}){
    return(
        <Container
        tabIndex="-1"
        type="button"
        {...rest}
        >
            {Icon && <Icon />}
            <a href={link}>{text}</a>
        </Container>
    )
}