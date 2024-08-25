
function getEdad() {
  let edad = 0;
  while (edad <= 0 || edad == NaN) {
    edad = parseInt(prompt("ingresa tu edad. Recorda que debes ingresar un valor numérico"));
    console.log(edad)
  }
  return edad;
}

function getPeso() {
  let peso = 0;
  while (peso <= 0 || peso == NaN) {
    peso = parseInt(prompt("ingresa tu peso en kg. Recorda que debes ingresar un valor numérico"));
  }

  return peso;
  
}

function getAltura() {
  
  let altura = 0;
  while (altura <= 0 || altura == NaN) {
    altura = parseInt(prompt("ingresa tu altura en cm. Recorda que debes ingresar un valor numérico"));
  }

  return altura;
}

function getActividad() {
  let actividad = prompt(
    "ingresa el numero que corresponda: (A) nada de actividad (B) un poco de actividad, (C) actividad moderada, (D) actividad muy intensa"
  );

  switch (actividad) {
    case "A":
      return 1.25;
      break;
    case "B":
      return 1.5;
      break;
    case "C":
      return 1.75;
      break;
    case "D":
      return 2;
      break;
    default:
      getActividad();
      break;
  }
}

function getGenero() {
  let genero = "";

  while (genero !== "M" && genero !== "F" && genero !== "m" && genero !== "f") {
    const g = prompt(
      "ingresa segun corresponda:M para masculino, F para femenino"
    );

    if (g === "M" || g === "m") {
      genero = "M";
    }

    if (g === "F" || g === "f") {
      genero = "F";
    }
  }

  return genero;
}

// Calculo de Calorias

function calorias(edad, peso, altura, actividad, genero) {
  switch (genero) {
    case "M":
      return 66 + 13.7 * peso + (5 * altura - 6.8 * edad) * actividad;
    case "F":
      return 65 + 9.6 * peso + (1.8 * altura - 4.7 * edad) * actividad;
  }
}



const userEdad = getEdad();
const userPeso = getPeso();
const userAltura = getAltura();
const userActividad = getActividad();
const userGenero = getGenero();


let resultado = parseInt(calorias(userEdad, userPeso, userAltura, userActividad, userGenero));
alert("calorias diarias para bajar de peso: " + resultado);













// let edad = parseInt(prompt("ingresa tu edad"));
// let peso = parseInt(prompt("ingresa tu peso en kg"));
// let altura = parseInt(prompt("ingresa tu altura en cm"));
// let actividad = parseFloat(prompt("ingresa el numero que corresponda:\n1.25 nada de actividad \n1.50 un poco de actividad\n1.75 actividad moderada\n 2 actividad muy intensa"));
// let genero =(prompt("ingresa segun corresponda:\n 1 para masculino\n 2 para femenino"));

// function calorias(edad, peso, altura, actividad,genero){
//     switch(genero){
//         case "1":
//             return (66+(13.7*peso))+((5*altura)-(6.8*edad))*actividad;
//         case "2":
//             return (65+(9.6*peso))+((1.8*altura)-(4.7*edad))*actividad;
//     }
// }
// let resultado = parseInt(calorias(edad,peso,altura,actividad,genero));
// alert( "calorias diarias para bajar grasa corporal son: " + resultado)
