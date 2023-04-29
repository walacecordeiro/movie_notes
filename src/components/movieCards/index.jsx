import { Container } from "./styles";
import { Link } from "react-router-dom"

import { MovieTitle } from "../movieTitle";
import { Rating } from "../rating";
import { Tag } from "../tag";

export function MovieCard() {
  return (
    <Container to={`/detalhes`}>
      <MovieTitle title="Interestelar" />

      <Rating rating={4} />

      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se...
      </p>

      <div>
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </div>
    </Container>
  );
}
