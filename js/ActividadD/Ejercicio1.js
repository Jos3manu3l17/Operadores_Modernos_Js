
// 1. Sistema de registro académico

// Requerimiento:

// Crea una función crearEstudiante(nombre, ...notas) que reciba:

// Un nombre obligatorio.
// Un número variable de notas mediante rest.


// La función debe:

// Validar con try...catch que todas las notas sean números.
// Usar destructuración para separar la primera nota del resto.
// Retornar un objeto inmutable con:
// Nombre
// Primera nota
// Promedio del resto de notas
// Total de notas registradas

// Resultado esperado:

// Un objeto final correctamente construido, sin mutar ningún arreglo externo, con cálculos correctos y con manejo adecuado de errores.


function crearEstudiante(nombre, ...notas) {

    try {

        for (let nota of notas) {

            if (typeof nota !== "number") {
                throw new Error("Todas las notas deben ser numéricas.");
            }

        }

        const [primeraNota, ...restoNotas] = notas;

        let suma = 0;

        for (let nota of restoNotas) {
            suma += nota;
        }

        const promedio = restoNotas.length > 0
            ? suma / restoNotas.length
            : 0;

        return {

            nombre,

            primeraNota,

            promedioResto: promedio,

            totalNotas: notas.length

        };

    } catch (error) {

        console.log("Error:", error.message);

    }

}

const estudiante = crearEstudiante(
    "Jose",
    4.5,
    3.8,
    5.0,
    4.2
);

console.log(estudiante);