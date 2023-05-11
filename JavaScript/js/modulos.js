import saludar, {Saludar, PI, usuario} from "./constantes.js";
import {aritmetica as caldulos} from "./aritmetica.js"

console.log("Archivos Módulos.js");
console.log(PI, usuario);
//console.log(aritmetica.restar (3,5));
console.log(caldulos.sumar (3,5));
console.log(caldulos.restar (3,5));

//saludar()

let saludo = new Saludar()
saludo
