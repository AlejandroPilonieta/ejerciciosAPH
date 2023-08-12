let name = prompt("Ingresa tu Nombre").toLowerCase();
const age = prompt("Ingresa tu edad");
let country = prompt("Ingresa tu pais").toLowerCase();
let ability = prompt("Es zurdo o diestro?").toLowerCase();
 
if ((country === "colombia" || country === "ecuador") && age >= "18" && ability === "zurdo") {
    alert("Felicidades, usted cumple con los requisitos para la beca.");
} else {
    alert("Lo sentimos, usted no cumple con los requisitos para la beca.");
}





