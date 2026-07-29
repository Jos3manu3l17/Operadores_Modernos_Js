// 3. Registro de actividades con manejo de errores
// Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
// {nombre, fecha}.
// • Usa un try...catch para validar que ambas propiedades existan.
// • Si falta alguna, lanza un error indicando que la actividad no es válida.
// • Si todo está correcto, muestra un mensaje confirmando el registro.

function registrarActividad(actividad) {
  try {
    const { nombre, fecha } = actividad;

    if (!nombre || !fecha) {
      throw new Error("La actividad no es valida. Debe contener 'nombre' y 'fecha'.");
    }
        console.log(`Actividad registrada con éxito: "${nombre}" para el ${fecha}.`);

  } catch (error) {
    console.log("Error al registrar:", error.message);
  }
}

registrarActividad({ nombre: "Reunion de equipo", fecha: "2023-10-15" });
