// Logica y algoritmos
let userName = "";
let age = "";


function registerData() {
  userName = prompt("ingresa tu nombre");
  age = prompt("ingresa tu edad");
  adress = prompt("Ingresa tu direccion");
  estadoCivil = prompt("Ingresa tu estado civil");
  id = prompt("Ingresa tu cedula");
  celular = prompt("Ingresa tu numero de cel");
  email = prompt("Ingresa tu correo");
  salario = prompt("Ingresa tu salario");
}

function showData() {
  alert(
    "Tu nombre es: " +
      userName +
      " Tu edad es: " +
      age +
      " Tu direccion es: " +
      adress +
      " Tu estado civil es: " +
      estadoCivil +
      " Tu cedula es: " +
      id +
      " Tu numero de celular es: " +
      celular +
      " Tu email es: " +
      email +
      " Tu salario es: " +
      salario
  );
}

// Codigo correcto 