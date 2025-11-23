/* 2. Control de inventario con inmutabilidad y spread
Partiendo del arreglo inicial:
const inventario = ["cámara", "trípode", "micrófono"];
Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin
modificar la original y que registre un mensaje indicando cuántos ítems tiene ahora el
inventario. */ 

/* const inventario = ["cámara", "trípode", "micrófono"];

function agregarInventario(lista, nuevoItem) {
  const nuevaLista = [...lista, nuevoItem];

  console.log(`Inventario actualizado, ahora tiene ${nuevaLista.length} ítems.`);

  return nuevaLista;
}


const inventarioActualizado = agregarInventario(inventario, "cable HDMI");


console.log("Inventario original:", inventario);

console.log("Nuevo inventario:", inventarioActualizado); */




// =========================================================================================

/* 3. Registro de actividades con manejo de errores
Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
{nombre, fecha}.
• Usa un try…catch para validar que ambas propiedades existan.

• Si falta alguna, lanza un error indicando que la actividad no es válida.
• Si todo está correcto, muestra un mensaje confirmando el registro.*/


/*function registrarActividad(actividad) {
  try {
    const { nombre, fecha } = actividad;

    if (!nombre || !fecha) {
      throw new Error("La actividad no es válida. Faltan las propiedades 'nombre' o 'fecha'.");
    }

    console.log(`Actividad registrada: '${nombre}' el ${fecha}.`);

  } catch (error) {
    console.error(` Error de registro: ${error.message}`);
  }
}

registrarActividad({ nombre: "Entrenamiento de equipo", fecha: "2025-12-01" });

registrarActividad({ nombre: "Revisar proyecto" });

registrarActividad(null);*/


// ===================================================================================================

/*const predeterminado = { tema: "claro", idioma: "es" };


function configurarUsuario(defaults, personalizadas) {
  const configuracionFinal = { ...defaults, ...personalizadas };

  const { idioma } = configuracionFinal;

  return idioma;
}

const opcionesPersonalizadas1 = { idioma: "en", notificaciones: true };
const idiomaResultado1 = configurarUsuario(predeterminado, opcionesPersonalizadas1);

console.log(`Configuración por defecto:`, predeterminado);
console.log(`Opciones personalizadas 1:`, opcionesPersonalizadas1);
console.log(`Resultado del idioma (en):`, idiomaResultado1);

const opcionesPersonalizadas2 = { tema: "oscuro", modoAvanzado: false };
const idiomaResultado2 = configurarUsuario(predeterminado, opcionesPersonalizadas2);

console.log(`Opciones personalizadas 2:`, opcionesPersonalizadas2);
console.log(`Resultado del idioma (es):`, idiomaResultado2);*/



// =============================================================================



/*2. Control de inventario con inmutabilidad y spread
Partiendo del arreglo inicial:
const inventario = ["cámara", "trípode", "micrófono"];
Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin
modificar la original y que registre un mensaje indicando cuántos ítems tiene ahora el
inventario.*/

const inventario = ["camara", "tripode", "microfono"]

function agregarinventario(lista, ...nuevoItem){
    const nuevaLista = [...lista, ...nuevoItem]
    console.log(`lista actualizada, ${nuevaLista.length} items`)
    return nuevaLista

}

const nuevaLista = agregarinventario(inventario, "usb","nuevo", "telefono", "hdmi");

console.log(inventario)
console.log(nuevaLista) 

// =================================================================================================

