import { Container } from "./styles";
import { FaStar, FaRegStar } from "react-icons/fa"

export function Rating({rating, ...rest}){
    const renderStars = () => {
        const stars = []

        for (let i = 1; i <= 5; i++) {
            if (i <= rating){
                stars.push(
                    <FaStar key={i}/>
                )
            } else {
                stars.push(
                    <FaRegStar key={i}/>
                )
            }
        }
        return stars
    }

    return(
        <Container {...rest}>
            {renderStars()}
        </Container>
    )
}