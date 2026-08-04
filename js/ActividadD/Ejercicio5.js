// 5. Motor de configuración avanzada

// Requerimiento:

// Dispones de estas configuraciones:

// const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
// const extraConfig = { nivel: 2, tema: "oscuro" };

// Crea la función configFinal(...configs) que:

// Reciba múltiples configuraciones usando rest.
// Use spread para mezclarlas todas en un solo objeto final sin mutar ninguna.
// Valide con try...catch que cada elemento recibido sea un objeto.
// Retorne un objeto final con una propiedad adicional:


// validacion: true si todo salió bien
// validacion: false si ocurrió un error

// Resultado esperado:

// Un objeto final consolidado, estable y construido con prácticas de programación segura,
// que refleje el uso combinado de todos los conceptos de la guía.


const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
const extraConfig = { nivel: 2, tema: "oscuro" };

function configFinal(...configs) {
  try {
    // 1. Validar mediante try...catch que cada elemento recibido sea un objeto válido
    for (const config of configs) {
      if (typeof config !== "object" || config === null || Array.isArray(config)) {
        throw new Error("Uno de los elementos proporcionados no es un objeto válido.");
      }
    }

    // 2. Mezclar todas las configuraciones usando spread (...) sin mutar las originales
    const resultado = Object.assign({}, ...configs);

    // 3. Retornar el objeto final consolidado con la propiedad validacion: true
    return {
      ...resultado,
      validacion: true
    };

  } catch (error) {
  
    return {
      validacion: false
    };
  }
}

const configExitosa = configFinal(baseConfig, extraConfig);
console.log("Resultado Exitoso:", configExitosa);


const configError = configFinal(baseConfig, "configuracion_invalida");
console.log("Resultado Error:", configError);
