import { Container, Head, MyMovies, Content } from "./styles"
import { AiOutlinePlus } from "react-icons/ai"
import { TfiFaceSad } from "react-icons/tfi"
import loadingGif from "../../assets/loading.gif"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"
import { useState, useEffect } from "react"

import { Header } from "../../components/header"
import { MovieCard } from "../../components/movieCards"
import { Button } from "../../components/button"

export function Home() {
  const [search, setSearch] = useState("")
  const [movieNotes, setMovieNotes] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/detalhes/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`)
      setMovieNotes(response.data)
      setLoading(false)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Head>
        <Header search={(e) => setSearch(e.target.value)} />
      </Head>

      <MyMovies>
        <h2>Meus filmes</h2>
        <Link to="/adicionar-filme">
          <Button icon={AiOutlinePlus} buttonText="Adicionar filme" />
        </Link>
      </MyMovies>

      <Content>
        {loading ? (
          <div className="loading">
            <img src={loadingGif} alt="Carregando..." />
            <h3>Carregando...</h3>
          </div>
        ) : movieNotes.length === 0 ? (
          <div className="noNotes">
            <TfiFaceSad />
            <h3>Você ainda não adicionou nehum filme</h3>
          </div>
        ) : (
          movieNotes.map((note) => (
            <MovieCard
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))
        )}
      </Content>
    </Container>
  )
}
