const URLEquipos= 'http://localhost:3004/Equipos'
export const consultarEquipoApi = async () => {
  try {
    const respuesta = await fetch(URLEquipos);

    const listaEquipos = await respuesta.json();
  
    return listaEquipos;
  } catch (error) {
    console.log(error);
  }
}
/*
export const crearUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(urlUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return;
  }
};
export const borrarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(urlUsuario + "/" + id, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const editarUsuarioApi = async (id, datosActualizados) => {
  try {

    const respuestaUsuario = await fetch(urlUsuario + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
  
    return respuestaUsuario;
  } catch (error) {
    console.log(error);
  }
};*/
