// 4. Mezcla de configuraciones con spread y destructuración
// Simula un sistema donde existen opciones por defecto y opciones personalizadas:
// const defaults = { tema: "claro", idioma: "es" };
// Crea una función configurarUsuario(defaults, personalizadas) que:
// • Use spread para combinar ambas configuraciones sin mutarlas.
// • Use destructuración para obtener el idioma configurado.
// Retorna el idioma resultante.

export function configurarUsuario(defaults, personalizadas) {
  // 1. Combinación inmutable usando spread operator
  const configuracionFinal = { ...defaults, ...personalizadas };

  // 2. Destructuración para obtener el idioma configurado
  const { idioma } = configuracionFinal;

  // 3. Retorno del idioma resultante
  return idioma;
}