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



const productos = ["teclado", "mouse", "pantalla"];

function agregarProducto(lista, nuevoProducto) {

  return [...lista, nuevoProducto];
}

const productosActualizados = agregarProducto(productos, "audífonos");

console.log("Lista Original:", productos); 

console.log("Nueva Lista:", productosActualizados); 

