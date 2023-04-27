import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"

export function NewMovieTags({isNew, value, onClick, ...rest}){
    return (
        <Container isNew={isNew}>
            <input
            type="text"
            value={value}
            tabIndex={isNew ? "" : "-1"}
            readOnly={!isNew}
            {...rest}
            />

            <button
            tabIndex="-1"
            type="button"
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'}
            >
                
                {isNew ? <FiPlus /> : <FiX />}

            </button>
        </Container>
    )
}