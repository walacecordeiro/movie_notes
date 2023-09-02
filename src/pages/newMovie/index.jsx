import { Container, Head, Content, GoBack, Form } from "./styles";
import { useState } from "react";

import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textArea";
import { NewMovieTags } from "../../components/NewMovieTags";

export function NewMovie() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
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
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <div>
            <TextArea placeholder="Observações" />
          </div>

          <Section title="Marcadores">
            <div className="tags">

              {tags.map((tag, index) => (
                <NewMovieTags
                  key={String(index)}
                  value={tag}
                  onClick={() => {}}
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
            <Button buttonText="Excluir filme" />
            <Button buttonText="Salvar alterações" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
