
function getEdad() {
  let edad = parseInt(prompt("ingresa tu edad. Recorda que debes ingresar un valor numérico"));

  if(typeof Number && edad > 0){
    return edad;
  }else{
    return getEdad();
  }
}

function getPeso() {
  let peso = parseInt(prompt("ingresa tu peso en kg. Recorda que debes ingresar un valor numérico"));

  if(typeof Number && peso > 0){
    return peso;
  }else{
    return getPeso();
  }
  
}

function getAltura() {
  
  let altura = parseInt(prompt("ingresa tu altura en cm. Recorda que debes ingresar un valor numérico"));

  if(typeof Number && altura > 0){
    return altura;
  }else{
    return getAltura();
  }
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
console.log(userEdad)
const userPeso = getPeso();
console.log(userPeso)
const userAltura = getAltura();
console.log(userAltura)
const userActividad = getActividad();
console.log(userActividad)
const userGenero = getGenero();
console.log(userGenero)


let resultado = parseInt(calorias(userEdad, userPeso, userAltura, userActividad, userGenero));
alert("calorias diarias para bajar de peso: " + resultado);
