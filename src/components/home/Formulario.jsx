import React from "react";
import Swal from "sweetalert2";
import {
  Container,
  InputGroup,
  Form,
  Button,
  FormGroup,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { crearServicio } from "../helpers/queris";

const Formulario = () => {
  const {
    //register,
    handleSubmit,
    reset,
  } = useForm();
  const navegacion = useNavigate();
  const onSubmit = (datos) => {
    crearServicio(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Usuario creado",
          "El usuario fue creado correctamente",
          "success"
        );
        reset();
        navegacion("/usuarios");
      } else {
        Swal.fire("Ocurrio un error ", "Intentelo mas tarde", "error");
      }
    });
  };

  return (
    <Container className="w-50">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Form.Label htmlFor="basic-url" className="text-light">
            Nombre de cliente
          </Form.Label>
          <Form.Control placeholder="Cliente" type="text" className="mb-3" />
        </FormGroup>

        <Form.Label htmlFor="basic-url" className="text-light">
          Numero de contacto
        </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">+54</InputGroup.Text>
          <Form.Control placeholder="Numero" type="number" />
        </InputGroup>

        <Form.Label htmlFor="basic-url" className="text-light">
          Descripcion de fallas
        </Form.Label>
        <InputGroup>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>

        <Form.Label htmlFor="basic-url" className="text-light">
          Descripcion de Presupuesto
        </Form.Label>
        <InputGroup>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Form.Label htmlFor="basic-url" className="text-light">
          Seña $
        </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control aria-label="Monto" placeholder="Monto" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <Form.Label htmlFor="basic-url" className="text-light">
          Presupuesto total $
        </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control aria-label="Monto" placeholder="Monto" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
