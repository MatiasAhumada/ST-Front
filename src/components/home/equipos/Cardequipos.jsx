
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const CardEquipos = (props) => {
  /*const usuario = JSON.parse(localStorage.getItem("usuarioBar")) || [];
  const navegacion = useNavigate();
  const onClick = () => {
    if (usuario == "") {
      navegacion("/login");
      Swal.fire("Debe estar logeado para realizar esta accion");
    } else {
      navegacion("/crear-pedido");
    }
  };
  <Card.Body>
          <Button className="dos mt-2"  onClick={onClick}>
            Comprar
          </Button>
          <Button
            className="dos ms-1 mt-2"
            as={Link}
            to={`/detalle-producto/${props.id}`}
          >
            Ver más
          </Button>
        </Card.Body>
*/
  return (
    <Container className="mt-4">
      <Card className="dos">
        
        <Card.Body>
          <Card.Title className="dos">Cliente: {props.nombreCliente}</Card.Title>
          <Card.Text>Equipo N°: {props.id}</Card.Text>
          <Card.Text>Descricion de fallas: {props.fallas}</Card.Text>
          <Card.Text>Descricion de Presupuesto: {props.dpresupuesto}</Card.Text>

        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>Numero: {props.numero}</ListGroup.Item>
          <ListGroup.Item >Seña: ${props.precio}</ListGroup.Item>
          <ListGroup.Item >Presupuesto: ${props.categoria}</ListGroup.Item>
        </ListGroup>
        
      </Card>
    </Container>
  );
};

export default CardEquipos;
