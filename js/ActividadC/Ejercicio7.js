// 7. Evaluación de datos con try...catch + spread

// Escribe una función evaluar(...valores) que:

// Reciba varios números mediante rest.
// Use un try...catch para verificar que todos sean numéricos.
// Si encuentra un valor no numérico, captura el error y muestra un mensaje adecuado.
// Si todo es válido, crea una nueva lista (sin mutar la original) y retorna el promedio


function evaluar(...valores) {

    try {

        for (let valor of valores) {

            if (typeof valor !== "number") {
                throw new Error("Todos los valores deben ser numéricos.");
            }

        }

        const nuevaLista = [...valores];

        let suma = 0;

        for (let numero of nuevaLista) {
            suma += numero;
        }

        return suma / nuevaLista.length;

    } catch (error) {

        console.log("Error:", error.message);

    }

}

console.log(evaluar(10,20,30,40));