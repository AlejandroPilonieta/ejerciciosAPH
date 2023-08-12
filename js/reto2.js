/**
 * Ingrese un departamento (cundinamarca, quindío, antioquia, valle)
 * ingrese objetivo de visita (turismo, comidas, museos)
 * Dependiendo de la opcion elegida mostrar la informacion correspondiente al objetivo y de acuardo al departamento
 * ejem (antiquia y comida = alert "las comidas mas polpulares son...")
 * ejem (antioquia y museos = alert "los museos mas populares son...")
 *
 * alert ("opcion no valida") en caso que no se ingrese alguna de las opciones
 *
 */

let department = prompt("Ingrese departamento");
let reason = prompt("Motivo de visita");

if (
  department === null ||
  department === "" ||
  reason === null ||
  reason === ""
) {
  alert("Datos no validos");
} else {
  department = department.toLowerCase();
  reason = reason.toLowerCase();

  if (department === "antioquia" && reason === "turismo") {
    alert("Un sitio turístico en Antioquia es el Pueblito paisa.");
  } else {
    if (department === "antioquia" && reason === "comida") {
      alert("La comida típica de Antioquia es la bandeja paisa.");
    } else {
      if (department === "antioquia" && reason === "museos") {
        alert(
          "Un museo para visitar en Antioquia es el museo de arte moderno en Medellín."
        );
      } else {
        if (department === "cundinamarca" && reason === "turismo") {
          alert(
            "Un sitio turístico en Cundinamarca es la catedral de sal ubicada en Zipaquirá."
          );
        } else {
          if (department === "cundinamarca" && reason === "comida") {
            alert("La comida típica en Cundinamarca es el ajiaco");
          } else {
            if (department === "cundinamarca" && reason === "museos") {
              alert(
                "Uno de los mejores museos en Cundinamarca es el museo del oro."
              );
            } else {
              if (
                department === "quindio" ||
                (department === "quindío" && reason === "turismo")
              ) {
                alert(
                  "Uno de los mejores sitios turísticos en el Quindío es el parque del cafe."
                );
              } else {
                if (
                  department === "quindio" ||
                  (department === "quindío" && reason === "comida")
                ) {
                  alert(
                    "Un plato gastronómico de la región del Quindío es el mondongo."
                  );
                } else {
                  if (
                    department === "quindio" ||
                    (department === "quindío" && reason === "museos")
                  ) {
                    alert(
                      "Un museo para visitar en el Quindío es el del oro Quimbaya"
                    );
                  } else {
                    if (department === "valle" && reason === "turismo") {
                      alert(
                        "Un sitio para visitar en el Valle es el zoológico de Cali."
                      );
                    } else {
                      if (department === "valle" && reason === "comida") {
                        alert(
                          "Algunas comidas típicas del Valle son el aborrajado y la lulada"
                        );
                      } else {
                        if (department === "valle" && reason === "museos") {
                          alert(
                            "Un museo para visitar en el valle es el museo arqueológico La Merced"
                          );
                        } else {
                          alert(
                            "Elija correctamente departamento y objetivo de su visita"
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
