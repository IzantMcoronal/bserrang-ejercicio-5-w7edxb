// Tipad
// Para determinar el tipo de los parámetros de la función, debes dar por hecho que los tipos van a ser siempre los de las dos variables que se añaden en la llamada de la linea 20.

let a : number = 5;
let b : string = "texto";
let c : boolean | number = true;

if (Math.random() >= 0.5) {
  c = 100;
}

function d(param1: number, param2: boolean | number) {
  if (typeof param2 === "number") {
    return param1 + param2;
  } else {
    return "el segundo parámetro no es un número";
  }
}

console.log(d(a, c));
