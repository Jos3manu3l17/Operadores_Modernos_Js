// 2. Fusión de catálogos digitales

// Requerimiento:

// Tienes dos catálogos:

// const catalogoA = [
// { id: 1, nombre: "Curso JavaScript", precio: 40 },
// { id: 2, nombre: "Curso HTML", precio: 35 }
// ];
// const catalogoB = [
// { id: 3, nombre: "Curso CSS", precio: 30 }
// ];

// Crea una función fusionarCatalogos(a, b) que:

// Use try...catch para validar que ambos parámetros sean arreglos.
// Utilice spread para fusionarlos sin modificar los originales.
// Retorne un nuevo catálogo ordenado por precio ascendente.

// Resultado esperado:

// Una nueva colección combinada, ordenada e inmutable. Si un parámetro no es un arreglo,
// debe mostrarse un error comprensible.


const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];

function fusionarCatalogos(a, b) {

    try {

        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Ambos parámetros deben ser arreglos.");
        }

        const nuevoCatalogo = [
            ...a,
            ...b
        ];

        nuevoCatalogo.sort((x, y) => x.precio - y.precio);

        return nuevoCatalogo;

    } catch (error) {

        console.log("Error:", error.message);

    }

}

console.log(fusionarCatalogos(catalogoA, catalogoB));