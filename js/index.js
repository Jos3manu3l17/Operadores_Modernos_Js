// Operadores modernos en JavaScript

// Esta es una funcion con rest parameters que permite recibir un número indefinido de argumentos
// y los agrupa en un array llamado "valores". Luego, se utiliza un bucle for para iterar sobre 
// cada elemento del array y se imprime en la consola el índice y el valor correspondiente.

function listarElementos(...valores) {
for (let i = 0; i < valores.length; i++) {
console.log("Elemento", i + 1, ":", valores[i]);
}
}

listarElementos("HTML", "CSS", "JavaScript", "Git", "Git Hub");



function mostrarElementos (...elementos) {
    for (let i = 0; i < elementos.length; i++) {
        console.log("Elemento ", i + 1, ": " , elementos[i]);
    }
    
}

mostrarElementos ("Java", "Python", "c++", "C#", "PHP", "Java Script", "HTML", "CSS", "Git", "Git Hub");

// Caso de problema de mutabilidad

const usuarioOriginal = {
nombre: "Carlos",
edad: 25
};

// Copia incorrecta: ambas variables apuntan al mismo objeto
const usuarioCopia = usuarioOriginal;

// Se modifica la copia camniando la edad
usuarioCopia.edad = 30;

console.log(usuarioOriginal.edad); // 30 Error: el original también cambió
console.log(usuarioCopia.edad); // 30

// Solución: Operador Spread + Inmutabilidad

// El operador spread permite crear una copia independiente, lo que significa que:

// • Podemos modificar la copia sin afectar el original.
// • Conservamos el estado previo.
// • El código es más seguro y predecible.

const usuarioOriginal = {
    nombre: "Jose",
    apellido: "Carreño",
    edad: "18",
    correo: "josemcp@gmail.com"
};

// console.log("Edad de usuario original: " , usuarioOriginal.edad);


// Copia correcta: se crea un nuevo objeto

const usuarioCopia = {...usuarioOriginal};

// // Modificamos la copia
usuarioCopia.edad = 20;

// Por el motivo de la creacion del nuevo objeto, la edad del usuario original 
// no cambia.
console.log("Edad de usuario original: " , usuarioOriginal.edad); 

// // Cambia solo la edad del usuario copia
console.log("Edad de usuario copia: " , usuarioCopia.edad);


// Ejemplo de operador spread con arreglos
const numeros = [1, 2, 3];
const copia = [...numeros];

console.log(copia); // [1, 2, 3]
// Aquí copia es una nueva versión del arreglo, independiente del original.



