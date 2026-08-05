const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

function estadisticas(jugadores) {
  try {
    // 1. Destructuración profunda del primer jugador para sacar sus puntos
    const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;

    // 2. Suma total de puntos mediante for...of (sin reduce y sin mutar el arreglo original)
    let puntosTotales = 0;
    for (const jugador of jugadores) {
      puntosTotales += jugador.stats.puntos;
    }

    // 3. Copia inmutable del arreglo original usando el operador spread (...)
    const jugadoresProcesados = [...jugadores];

    return {
      puntosPrimerJugador,
      puntosTotales,
      jugadoresProcesados
    };

  } catch (error) {
    return "Error: La estructura de datos no es válida.";
  }
}

console.log(estadisticas(jugadores));