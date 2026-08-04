import { configurarUsuario} from './js/ActividadC/Ejercicio4.js';

// Si estás usando Node.js (CommonJS):
// const { configurarUsuario } = require('./config.js');

// Si estás usando ES Modules:
// import { configurarUsuario } from './config.js';

// 1. Configuración por defecto
const defaults = { tema: "claro", idioma: "es" };

// 2. Pruebas y envío de atributos a la función

// Caso A: El usuario personaliza el tema y el idioma
const personalizadas1 = { tema: "oscuro", idioma: "en" };
const idiomaResultado1 = configurarUsuario(defaults, personalizadas1);
console.log("Idioma resultante 1:", idiomaResultado1); // Salida: "en"

// Caso B: El usuario solo cambia el tema y conserva el idioma por defecto
const personalizadas2 = { tema: "oscuro" };
const idiomaResultado2 = configurarUsuario(defaults, personalizadas2);
console.log("Idioma resultante 2:", idiomaResultado2); // Salida: "es"

// 3. Verificación de inmutabilidad del objeto 'defaults'
console.log("Defaults intactos:", defaults); //

