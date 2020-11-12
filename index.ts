// Tipad
// Para determinar el tipo de los parámetros de la función, debes dar por hecho que los tipos van a ser siempre los de las dos variables que se añaden en la llamada de la linea 20.

// declaramos la variable a como tipo numero
let a : number = 5;

//Declaramos la variable b como String
let b : string = "texto";

// Aqui usamos el operador "|" ya que la variable puede ser de dos tipos, tanto un numero como booleana
let c : boolean | number = true;

if (Math.random() >= 0.5) {
  c = 100;
}

// Typamos el parametro de la funcion 1 al ser el operador a como numero y el parametro 2 como booleana y numero ya que es el operador c. La funcion la tipamos de 2 tipos, ya que puede dar 2 resultados, o bien una suma numerica o bien un string. 
function d(param1: number, param2: boolean | number): number | String {
  if (typeof param2 === "number") {
    return param1 + param2;
  } else {
    return "el segundo parámetro no es un número";
  }
}

console.log(d(a, c));
