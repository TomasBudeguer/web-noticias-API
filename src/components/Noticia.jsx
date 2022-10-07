import { Col, Card, Button, Badge } from "react-bootstrap";

const Noticia = () => {
  return (
    <Col sm={12} md={6} lg={3}>
      <Card>
        <Card.Img
          variant="top"
          src="https://media.datacenterdynamics.com/media/images/Extra.2e16d0ba.fill-1200x630.jpg"
          alt="Imagen noticia"
        />
        <Card.Body>
          <Card.Subtitle className="mb-3 text-center">"Diario"</Card.Subtitle>
          <div className="d-flex justify-content-between">
            <Card.Title>Titulo</Card.Title>
            <Card.Subtitle>
              <Badge bg="secondary">Categoria</Badge>
            </Card.Subtitle>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">Ver noticia completa</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Noticia;
