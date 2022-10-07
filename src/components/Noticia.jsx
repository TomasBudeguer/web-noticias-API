import { Col, Card, Button, Badge } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  return (
    <Col sm={12} md={6} lg={3} className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={noticia.image_url}
          alt="Noticia sin imagen"
        />
        <Card.Body>
          <Card.Subtitle className="mb-2">
            {noticia.creator}
          </Card.Subtitle>
          <Card.Subtitle className="text-end mb-2">
            <Badge bg="secondary">{noticia.category}</Badge>
          </Card.Subtitle>
          <Card.Title className="mb-2">{noticia.title}</Card.Title>
          <Card.Text>{noticia.description || noticia.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <a href={noticia.link}>
            <Button variant="primary">Ver noticia completa</Button>
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Noticia;
