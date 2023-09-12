import { Container } from "./styles"

import { MovieTitle } from "../movieTitle"
import { Rating } from "../rating"
import { Tag } from "../tag"

export function MovieCard({ data, maxDescriptionLength = 200, ...rest }) {
  const shortDescription =
    data.description.length > maxDescriptionLength
      ? data.description.slice(0, maxDescriptionLength) + "..."
      : data.description
  return (
    <Container {...rest}>
      <MovieTitle title={data.title} />

      <Rating rating={data.rating} hoverEnabled={false} />

      <p>{shortDescription}</p>

      {data.tags && (
        <div>
          {data.tags.map((tag) => (
            <Tag key={String(tag.id)} title={tag.tags} />
          ))}
        </div>
      )}
    </Container>
  )
}
