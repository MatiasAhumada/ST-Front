import React from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = () => {
    const{
        //register,
        handleSubmit,
        //reset,
    }=useForm();
    const onSubmit=(dato)=>{
        console.log(dato);
    };

  return (
    <Container className="w-50">
        <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label htmlFor="basic-url" className="text-light">
        Nombre de cliente
      </Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Cliente"
          type="text"
         
        />
      </InputGroup>
      <Form.Label htmlFor="basic-url" className="text-light">
        Numero de contacto
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">+54</InputGroup.Text>
        <Form.Control
          placeholder="Numero"
          type="number"
        />
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
