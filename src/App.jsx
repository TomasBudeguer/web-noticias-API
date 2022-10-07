import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";

function App() {
  return (
    <div>
      <Titulo></Titulo>
      <Container>
        <Formulario></Formulario>
      </Container>
    </div>
  );
}

export default App;
