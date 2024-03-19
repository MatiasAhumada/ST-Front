import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link} from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Navbar.Brand as={Link} to="/" className="ms-3 text-light">Servicio Tecnico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-center">
          <Nav.Link as={Link} to="/" className="text-light">Inicio</Nav.Link>
          <Nav.Link className="text-light" as={Link} to="/ordenes">Ordenes</Nav.Link>
          <Nav.Link className="text-light">Inventario</Nav.Link>
          <Nav.Link className="text-light">Clientes</Nav.Link>
          <Nav.Link className="text-light">Proveedores</Nav.Link>
          <Nav.Link className="text-light">Servicios</Nav.Link>
          <Nav.Link className="text-light">Finanzas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
