// 4. Informe de estadísticas deportivas

// Requerimiento:

// Partiendo del arreglo:

// const jugadores = [
// { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
// { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
// ];

// Crea una función estadisticas(jugadores) que:

// Verifique mediante try...catch que la estructura de datos sea válida.
// Emplee destructuración profunda para obtener los puntos del primer jugador.
// Calcule la suma total de puntos del equipo utilizando técnicas inmutables.
// Devuelva un objeto con:

// Puntos del primer jugador
// Puntos totales del equipo
// Lista inmutable de jugadores procesados

// Resultado esperado:
// Un objeto estadístico confiable, con cálculos correctos y sin mutación de la lista original.


const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

function estadisticas(jugadores) {
  try {
    // 1. Destructuración profunda del primer jugador para sacar sus puntos
    const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;

    // 2. Suma total de puntos sin modificar el arreglo original (inmutable)
    const puntosTotales = jugadores.reduce((suma, jugador) => suma + jugador.stats.puntos, 0);

    // Reduce: Recorre a cada jugador y va sumando sus puntos uno a uno sin tocar el arreglo de origen.

    // 3. Copia inmutable del arreglo original usando el operador spread (...)
    const jugadoresProcesados = [...jugadores];

    // 4. Retornamos el objeto final
    return {
      puntosPrimerJugador,
      puntosTotales,
      jugadoresProcesados
    };

  } catch (error) {
    return "Error: La estructura de datos no es válida.";
  }
}

// Probar la función:
console.log(estadisticas(jugadores));