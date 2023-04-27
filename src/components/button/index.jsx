import { Container } from "./styles"

export function Button({icon: Icon, buttonText, ...rest}){
    return(
        <Container
        tabIndex="-1"
        type="button"
        {...rest}
        >
            {Icon && <Icon />}
            {buttonText}
        </Container>
    )
}