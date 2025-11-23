/* Ejercicio 1:
Crea una función llamada registrarUsuarios que reciba un primer argumento obligatorio
con la información de un usuario principal (nombre, edad) y luego un número
indeterminado de usuarios adicionales usando parámetros rest.
1. Usa destructuración para extraer nombre y edad del usuario principal.
2. La función debe mostrar un mensaje indicando cuántos usuarios adicionales se
registraron.
Resultado esperado (ejemplo):
Usuario principal: Ana, Edad: 28 — Usuarios adicionales registrados: 3 */

function registrarUsuarios(usuarioPrincipal, ...usuariosAdicionales) {
  const { nombre, edad } = usuarioPrincipal;

  const cantidadAdicionales = usuariosAdicionales.length;

  const mensaje = `Usuario principal: ${nombre}, Edad: ${edad} — Usuarios adicionales: ${cantidadAdicionales}`;

  console.log(mensaje);
}

registrarUsuarios(
  { nombre: "Ana", edad: 28 }, 
  { nombre: "Beto", edad: 35 },
  { nombre: "Carla", edad: 22 },
  { nombre: "Dani", edad: 40 } 
);

registrarUsuarios(
  { nombre: "Felipe", edad: 50 } 
);
