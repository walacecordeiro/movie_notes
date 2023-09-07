import { Container } from "./styles";
import { Link } from "react-router-dom";

import { MovieTitle } from "../movieTitle";
import { Rating } from "../rating";
import { Tag } from "../tag";

export function MovieCard({ data, ...rest }) {
  return (
    <Container to={`/detalhes`} {...rest}>
      <MovieTitle title={data.title} />

      <Rating rating={data.rating} />

      <p>{data.description}</p>

      {data.tags && (
        <div>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </div>
      )}
    </Container>
  );
}
