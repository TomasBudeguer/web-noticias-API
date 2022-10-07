import { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoria.trim() === "") {
      alert("Seleccione una categoria");
    } else {
      consultarAPI();
    }
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_120060cf3047975828a1d6a5b67b247f8d572&category=${categoria}`
      );
      const dato = await respuesta.json();
      console.log(dato.results);
      setNoticias(dato.results);
    } catch (error) {}
  };

  return (
    <Card className="my-4">
      <Card.Header className="p-4 bgClaro">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={12} md={4} lg={2}>
                <Form.Label>Buscar por categoria:</Form.Label>
              </Col>
              <Col sm={12} md={6} lg={8}>
                <Form.Select
                  aria-label="categoria"
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
                  required
                >
                  <option>Categorias</option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="environment">Environment</option>
                  <option value="food">Food</option>
                  <option value="health">Health</option>
                  <option value="politics">Politics</option>
                  <option value="science">Science</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                  <option value="top">Top</option>
                  <option value="world">World</option>
                </Form.Select>
              </Col>
              <Col sm={12} md={2} lg={2}>
                <Button variant="secondary" type="submit" >
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Card.Header>
      <Card.Body className="bgMasClaro">
        <ListaNoticias noticias={noticias}></ListaNoticias>
      </Card.Body>
    </Card>
  );
};

export default Formulario;
