import { Container, Head, Content, GoBack, Form } from "./styles";

import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textArea";

export function NewMovie() {
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

          <div>
            <span>Marcadores</span>
          </div>

          <div className="col2">
            <Button buttonText="Excluir filme" />
            <Button buttonText="Salvar alterações" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
