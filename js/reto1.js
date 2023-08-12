/**
 * ingresar un departamento (cundinamarca, quindio, antioquia,valle)
 * alert ("opcion no valida")
 * dependiendo de que dep es debe mostrar cual es la capital
 *
 */

let department = prompt("Ingrese departamento");

if (department === null || department === "") {
  alert("Opción inválida");
} else {
  department = department.toLowerCase();

  if (department === "antioquia") {
    alert("Medellín");
  } else if (department === "cundinamarca") {
    alert("Bogotá");
  } else if (department === "quindio" || department === "quindío") {
    alert("Armenia");
  } else if (department === "valle") {
    alert("Cali");
  } else {
    alert("Elija departamento Antioquia, Cundinamarca, Quindío o Valle");
  }
}
