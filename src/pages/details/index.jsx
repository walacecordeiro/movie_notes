import { useEffect, useState } from "react"
import { Container, Content, TitleAndRating, Tags, Author } from "./styles"
import { useParams } from "react-router-dom"

import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { BiTime } from "react-icons/bi"

import { Header } from "../../components/header"
import { BackButton } from "../../components/backButton"
import { MovieTitle } from "../../components/movieTitle"
import { Rating } from "../../components/rating"
import { Tag } from "../../components/tag"

export function Details() {
  const { user } = useAuth()

  const [data, setData] = useState(null)
  const params = useParams()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  function formatDate(date) {
    return format(new Date(date), "dd/MM/yyyy 'às' HH:mm", {
      locale: ptBR,
      timeZone: "America/Sao_Paulo",
    })
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <BackButton buttonText="Voltar" />

            <TitleAndRating>
              <MovieTitle title={data.title} />
              <Rating rating={data.rating} hoverEnabled={false} />
            </TitleAndRating>

            <Author>
              <img src={avatarUrl} alt={`Foto do autor ${user.user_name}`} />
              <span>Por {user.user_name}</span>
              <BiTime />
              <span>{formatDate(data.created_at)}</span>
            </Author>

            {data.movie_tags && (
              <Tags>
                {data.movie_tags.map((tags) => (
                  <Tag key={String(tags.id)} title={tags.tags} />
                ))}
              </Tags>
            )}

            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  )
}
