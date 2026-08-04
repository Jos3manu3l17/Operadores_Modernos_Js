// 8. Fusión de colecciones y validación final

// Crea una función fusionarColecciones(lista1, lista2) que:

// Use spread para fusionar las dos listas sin mutarlas.
// Valide dentro de un try...catch que ambas listas sean arreglos.
// Si no lo son, lanza un error personalizado.
// Retorna la colección final.


function fusionarColecciones(lista1, lista2) {

    try {

        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
            throw new Error("Ambos parámetros deben ser arreglos.");
        }

        const coleccionFinal = [
            ...lista1,
            ...lista2
        ];

        return coleccionFinal;

    } catch (error) {

        console.log("Error:", error.message);

    }

}

const lista1 = ["HTML", "CSS"];
const lista2 = ["JavaScript", "React"];

console.log(fusionarColecciones(lista1, lista2));