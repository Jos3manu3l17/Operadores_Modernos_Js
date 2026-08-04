// 3. Procesamiento de compras

// Requerimiento:

// Implementa una función procesarCompra(cliente, productos) donde:

// cliente es un objeto con {nombre, correo}.
// productos es una lista de objetos con {nombre, precio}.

// La función debe:

// Validar con try...catch que el cliente tenga los dos datos y que los productos sean
// válidos.

// Utilizar spread para crear un nuevo objeto con toda la información del cliente.
// Usar destructuración para separar el primer producto comprado del resto.
// Retornar un informe con:


// Total de productos
// Precio total
// Primer producto adquirido

// Resultado esperado:

// Un informe completo y coherente, construido con técnicas de inmutabilidad y manejo
// seguro de errores.


function procesarCompra(cliente, productos) {

    try {

        if (!cliente.nombre || !cliente.correo) {
            throw new Error("El cliente debe tener nombre y correo.");
        }

        if (!Array.isArray(productos)) {
            throw new Error("Los productos deben ser un arreglo.");
        }

        for (let producto of productos) {

            if (!producto.nombre || typeof producto.precio !== "number") {
                throw new Error("Producto inválido.");
            }

        }

        const nuevoCliente = {
            ...cliente
        };

        const [primerProducto, ...restoProductos] = productos;

        let total = 0;

        for (let producto of productos) {
            total += producto.precio;
        }

        return {

            cliente: nuevoCliente,

            totalProductos: productos.length,

            precioTotal: total,

            primerProducto

        };

    } catch (error) {

        console.log("Error:", error.message);

    }

}

const cliente = {

    nombre: "Jose",

    correo: "jose@gmail.com"

};

const productos = [

    { nombre: "Teclado", precio: 120 },

    { nombre: "Mouse", precio: 80 },

    { nombre: "Monitor", precio: 900 }

];

console.log(procesarCompra(cliente, productos));