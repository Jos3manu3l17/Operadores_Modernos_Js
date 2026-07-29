// Ejercicio 1

function registrarUsuarios(usuarioPrincipal, ...usuariosAdicionales) {

    const { nombre, edad } = usuarioPrincipal;

  console.log(
    `Usuario principal: ${nombre}, Edad: ${edad} — Usuarios adicionales registrados: ${usuariosAdicionales.length}`
  );
}

const usuario1 = { nombre: "Ana", edad: 28 };

registrarUsuarios(
  usuario1,
  { nombre: "Carlos", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 22 }
);



//Ejercicio 2

const productos = ["teclado", "mouse", "pantalla"];

function agregarProducto(lista, nuevoProducto) {

  return [...lista, nuevoProducto];
}

const productosActualizados = agregarProducto(productos, "audífonos");

console.log("Lista Original:", productos); 

console.log("Nueva Lista:", productosActualizados); 


//Ejercicio 3

function mostrarDireccion (direccion) {
    try {
        const {ciudad, pais} = direccion;
        if (!ciudad || !pais) {
            throw new Error("La informacion de la direccion no es valida");
        }
        console.log(`Dirección: ${ciudad}, ${pais}`);
    } catch (error) {
        console.log("Error: " , error.message);   
    }
}
mostrarDireccion ({ciudad: "Bogotá" , pais: "Colombia"});

//Ejercicio 4:

const estudiante = {
  nombre: "Laura",
  notas: [4.0, 3.8]
};

function actualizarNotas(estudianteObj, ...nuevasNotas) {
  // Retornamos un nuevo objeto combinando el spread del objeto original
  // y un nuevo arreglo para 'notas' combinando las anteriores con las nuevas
  return {
    ...estudianteObj,
    notas: [...estudianteObj.notas, ...nuevasNotas]
  };
}

// Llamada a la función
const estudianteActualizado = actualizarNotas(estudiante, 4.5, 5.0);

// --- Verificación en consola ---

console.log("Objeto Original:", estudiante);
// Muestra: { nombre: "Laura", notas: [4.0, 3.8] }

console.log("Objeto Actualizado:", estudianteActualizado);
// Muestra: { nombre: "Laura", notas: [4.0, 3.8, 4.5, 5.0] }