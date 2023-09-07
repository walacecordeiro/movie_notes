import { Container, Head, MyMovies, Content } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

import { Header } from "../../components/header";
import { MovieCard } from "../../components/movieCards";
import { Button } from "../../components/button";

export function Home() {
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);
      setMovieNotes(response.data);
    }

    fetchNotes();
  }, [search]);

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
        {movieNotes.map((note) => (
          <MovieCard key={String(note.id)} data={note} />
        ))}
      </Content>
    </Container>
  );
}
