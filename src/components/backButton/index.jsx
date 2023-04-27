import { Container } from "./styles"

import { FiArrowLeft } from "react-icons/fi"


export function BackButton({buttonText = "Voltar", ...rest}){
    return(
        <Container
        tabIndex="-1"
        type="button"
        {...rest}
        >
            <FiArrowLeft />
            {buttonText}
        </Container>
    )
}