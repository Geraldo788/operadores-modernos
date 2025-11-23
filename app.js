/* Ejercicio 3:
Crea una función llamada mostrarDireccion que reciba un objeto con la siguiente
estructura:

{ ciudad: "Bogotá", pais: "Colombia" }
La función debe:
1. Usar destructuración para obtener ciudad y pais.
2. Envolver el proceso dentro de un try…catch.
3. Si el objeto no contiene las propiedades necesarias, arrojar un error personalizado
que indique:
"La información de la dirección no es válida". */

let obj = {ciudad: "Bogota",}

const mostrarDireccion = (obj) =>{
try { 
    const {ciudad , pais} = obj;
    if (ciudad == undefined || pais == undefined){
        throw new Error("La informacion de la direccion no es valida");
    }
    console.log(ciudad);
    console.log(pais);
    
} catch (error) {
    console.log(error.message)    
}
}

mostrarDireccion(obj);

console.log("Finalizamos")

