import { Container, Head, Content, GoBack, Form } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textArea";
import { NewMovieTags } from "../../components/NewMovieTags";

import { api } from "../../services/api";

export function NewMovie() {
  const [title, setTitle] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [description, setDescription] = useState(" ");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function cancel(){
    navigate("/")
  }

  async function handleNewMovieNote() {
    await api.post("/movie_notes", {
      title,
      rating,
      description,
      tags,
    });

    alert("Nota do filme criada com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Head>
        <Header />
      </Head>

      <GoBack>
        <BackButton />
      </GoBack>

      <Content>
        <h2>Novo filme</h2>
        <Form>
          <div className="col2">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div>
            <TextArea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NewMovieTags
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NewMovieTags
                isNew
                placeholder="Novo marcador"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="col2">
            <Button buttonText="Cancelar" onClick={cancel}/>
            <Button buttonText="Adicionar Nota" onClick={handleNewMovieNote} />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
