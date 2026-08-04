// 5. Actualización de perfiles con inmutabilidad + rest

// Crea una función actualizarPerfil(perfil, ...nuevosDatos).
// Cada elemento de nuevosDatos será un objeto parcial como {edad: 22} o {ciudad:
// "Medellín"}.

// Combina todos los datos usando inmutabilidad y spread.

// Retorna el nuevo perfil completo.

 function actualizarPerfil(perfil, ...nuevosDatos) {

    let nuevoPerfil = {
        ...perfil
    };

    for (let dato of nuevosDatos) {

        nuevoPerfil = {
            ...nuevoPerfil,
            ...dato
        };

    }

    return nuevoPerfil;

}

const perfil = {
    nombre: "Jose",
    edad: 20,
    ciudad: "Bogotá"
};

const perfilActualizado = actualizarPerfil(
    perfil,
    { edad: 22 },
    { ciudad: "Medellín" },
    { telefono: "3001234567" }
);

console.log("Perfil original:");
console.log(perfil);

console.log("Perfil actualizado:");
console.log(perfilActualizado);


