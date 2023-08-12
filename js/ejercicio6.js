// condicionales
// if and else que nos permiten tomar deciciones
/**
 * Operadores de comparacion
 * (==) comparamos valores sin importar el tipo de dato
 * (===) comparamos valores respetando el tipo de dato siempre utilizar este por seguridad (SIEMPRE USA ESTE)
 * (>) mayor que
 * (<) menor que
 * (>=) mayor igual solo para numeros
 * (<=) menor igual solo para numeros
 * (!=) Significa Diferente no respeta tipos de datos
 * (!==) significa Diferente respetamdo tipo de datos (siempre usa este)
 */

/**
 * operadores logicos
 * (||)- O cualquiera de las condiciones es valida
 * (&&)- Y si o si se deben cumplir todas las condiciones
 */
// declaramos la variable de edad
const age = prompt("ingresa tu edad");
const country = prompt("ingresa tu pais").toLowerCase();

//condicional if/else  "16"

if (age >= "16" && country != "alemania") {
  alert("se habilito el catalogo de peliculas violentas");
} else {
  alert(" no tienes permiso de ver este catalogo");
}

/**
 *  Mayúsculas => La funcion .toLowerCase se usa para pasar los textos ingresado por el usuario a minúsculas
 *  Tildes
 *  Vacios
 *  Nulos
 *  Convertir tipos de datos
 */
