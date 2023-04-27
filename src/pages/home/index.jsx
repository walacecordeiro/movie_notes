import { Container, Head, MyMovies, Content } from "./styles"
import { AiOutlinePlus } from "react-icons/ai"

import { Header } from "../../components/header"
import { MovieCard } from "../../components/movieCards"
import { Button } from "../../components/button"

export function Home(){
    return (
        <Container>
            <Head>
                <Header />
            </Head>

            <MyMovies>    
                <h2>Meus filmes</h2>
                <Button icon={AiOutlinePlus} buttonText="Adicionar filme"/>
            </MyMovies>

            <Content>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </Content>
        </Container>
    )
}