// Importamos la funcion multiplicars
import { multiplicar } from "../export/export1.mjs";
console.log(multiplicar(8, 9));

console.log('------------------------------------------');

// Llamamos a las funciones externas:
import { funcionExterna } from "../export/export1.mjs";
console.log(funcionExterna(18, 5));

import { funcionExterna2, funcionExterna3, funcionExterna4 } from "../export/export1.mjs";

console.log(funcionExterna2('Dante'));
console.log(funcionExterna3());
console.log(funcionExterna4());




