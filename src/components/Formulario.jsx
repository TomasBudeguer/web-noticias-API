import { Form, Row, Col, Card } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  return (
    <Card className="my-4">
      <Card.Header className="p-4">
        <Row>
          <Col sm={12} md={4}>
            <p>Buscar por categoria:</p>
          </Col>
          <Col sm={12} md={8}>
            <Form.Select aria-label="Default select example">
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
        </Row>
      </Card.Header>
      <Card.Body>
        <ListaNoticias></ListaNoticias>
      </Card.Body>
    </Card>
  );
};

export default Formulario;
