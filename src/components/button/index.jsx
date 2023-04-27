import { Container } from "./styles"

export function Button({icon: Icon, buttonText, ...rest}){
    return(
        <Container
        type="button"
        {...rest}
        >
            {Icon && <Icon />}
            {buttonText}
        </Container>
    )
}