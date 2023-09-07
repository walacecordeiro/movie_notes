import { Container, Head, MyMovies, Content } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { MovieCard } from "../../components/movieCards";
import { Button } from "../../components/button";

export function Home() {
  return (
    <Container>
      <Head>
        <Header />
      </Head>

      <MyMovies>
        <h2>Meus filmes</h2>
        <Link to="/adicionar-filme">
          <Button icon={AiOutlinePlus} buttonText="Adicionar filme" />
        </Link>
      </MyMovies>

      <Content>
        <MovieCard
          data={{
            title: `Interestelar`,
            rating: 4,
            description: `
                    Pragas nas colheitas fizeram a civilização humana regredir para uma
                    sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
                    NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
                    Cooper, acredita que seu quarto está assombrado por um fantasma que
                    tenta se...`,
            tags: [
              { id: "1", name: "Ficção Ciêntifica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
      </Content>
    </Container>
  );
}
