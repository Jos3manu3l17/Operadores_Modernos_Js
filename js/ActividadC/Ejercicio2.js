// 2. Control de inventario con inmutabilidad y spread
// Partiendo del arreglo inicial:
// const inventario = ["cámara", "trípode", "micrófono"];
// Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin
// modificar la original y que registre un mensaje indicando cuántos ítems tiene ahora el
// inventario.

const inventario = ["cámara", "trípode", "micrófono"];

function agregarInventario(lista, nuevoItem) {

  const nuevoInventario = [...lista, nuevoItem];

  console.log(`El inventario ahora tiene ${nuevoInventario.length} ítems.`);

  return nuevoInventario;
}

const inventarioActualizado = agregarInventario(inventario, "iluminación LED");

console.log("Inventario Original:", inventario);

console.log("Inventario Actualizado:", inventarioActualizado);
