
import CardEquipos from "./Cardequipos"
import React, { useEffect, useState } from "react";
import { consultarEquipoApi } from "../../helpers/queris";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Equipos = () => {
  const [equipos, setEquipos] = useState([]);
  //const [mostrarSpiner, setMostrarSpiner] = useState(true);
  const navegar = useNavigate();
  useEffect(() => {
    
    consultarEquipoApi().then((respuesta) => {
      if (respuesta) {
        try {
          //setMostrarSpiner(true);
          setEquipos(respuesta);
          //setMostrarSpiner(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        navegar("/error404");
      }
    });
  }, []);
  /*const mostrarComponente =
    mostrarSpiner === true ? (
      <Spiner className="mt-5 pt-5"></Spiner>
    ) : (
      <Row xs={1} md={4} className="g-4">
        {productos.map((objeto, _id) => (
          <CardProducto
            key={_id}
            nombreProducto={objeto.nombreProducto}
            precio={objeto.precio}
            imagen={objeto.imagen}
            categoria={objeto.categoria}
            descripcion={objeto.detalle}
            id={objeto._id}
          ></CardProducto>
        ))}
      </Row>
      mostrarComponente}
    );*/

  return (
    <article className="bg-secondary">
      <h1 className="text-light text-center">Equipos</h1>
      <hr />
      <br />
  
      <Row xs={1} md={4} className="g-4">
        {equipos.map((objeto) => (
          <CardEquipos
            
            nombreCliente={objeto.nombreCliente}
            numero={objeto.numero}
            fallas={objeto.fallas}
            dpresupuesto={objeto.dpresupuesto}
            sena={objeto.sena}
            presupuesto={objeto.presupuesto}
            id={objeto.id}
          ></CardEquipos>
        ))}
      </Row>
      

      <br />
      <br />
    </article>
  );
};

export default Equipos;