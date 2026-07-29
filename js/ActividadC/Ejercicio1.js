// 1. Gestión de pedidos con rest y destructuración

// Crea una función procesarPedido(pedido, ...extras) donde pedido es un objeto con {cliente,
// producto, cantidad}.

// Usa destructuración para obtener sus propiedades.
// Usa parámetros rest para almacenar los extras del pedido.

// La función debe retornar un objeto final con toda la información consolidada.


function procesarPedido(pedido, ...extras) {

  const { cliente, producto, cantidad } = pedido;

  return {
    cliente,
    producto,
    cantidad,
    extras 
  };
}

const pedidoInicial = {
  cliente: "Carlos Pérez",
  producto: "Hamburguesa Especial",
  cantidad: 2
};

const pedidoConsolidado = procesarPedido(pedidoInicial, "Queso extra", "Papas agrandadas", "Salsa especial");

console.log(pedidoConsolidado);

