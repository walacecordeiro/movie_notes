import { Container } from "./styles"
import { Link } from "react-router-dom"

export function TextLink({icon: Icon, text, route, ...rest}){
    return(
        <Container
        tabIndex="-1"
        type="button"
        {...rest}
        >
            {Icon && <Icon />}
            <Link to={route}>{text}</Link>
        </Container>
    )
}