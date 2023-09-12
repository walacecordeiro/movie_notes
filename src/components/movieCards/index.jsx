import { Container } from "./styles";

import { MovieTitle } from "../movieTitle";
import { Rating } from "../rating";
import { Tag } from "../tag";

export function MovieCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <MovieTitle title={data.title} />

      <Rating rating={data.rating} hoverEnabled={false}/>

      <p>{data.description}</p>

      {data.tags && (
        <div>
          {data.tags.map((tag) => (
            <Tag key={String(tag.id)} title={tag.tags} />
          ))}
        </div>
      )}
    </Container>
  );
}
