// Importamos la clase calculador con ESM
import { ClaseCalculador } from "../export/export2.mjs";

// Instanciamos la clase
const operaciones = new ClaseCalculador('Calculadora');

console.log("Resultado:", operaciones.metodoSumar(25, 40));
console.log("Resultado:", operaciones.metodoResta(50, 12));
console.log("Resultado:", operaciones.metodoMultiplicar(8, 9));
console.log("Resultado:", operaciones.metodoDividir(25, 5));


