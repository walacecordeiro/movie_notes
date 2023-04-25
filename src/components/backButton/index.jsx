import { Container } from "./styles"

import { FiArrowLeft } from "react-icons/fi"


export function BackButton({buttonText, ...rest}){
    return(
        <Container
        type="button"
        {...rest}
        >
            <FiArrowLeft />
            {buttonText}
        </Container>
    )
}