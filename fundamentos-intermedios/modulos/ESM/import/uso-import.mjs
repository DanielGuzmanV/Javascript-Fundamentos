// ```
// Posibles errores: 
// * Error de extencion, (uso-export.js y uso-import.js): para este error creamos un archivo package.json o agregamos a nuestro package.json
// "type": "module"

// * Si no queremos crear "package.json" o agregarlo al "package.json", realizamos esto, al final de los archivos: (uso-export y uso-import) pondremos ".mjs"
// Osea (uso-export.mjs y uso-import.mjs) y cuando lo llamamos en el import, como en este caso pondremos esto:
// import { PI, sumar } from "../export/uso-export.mjs";

// Asi podremos exportar e importar sin problemas
// ```

// Ahora aqui importamos los elementos especificos:
// En este ejemplo usaremos ".mjs"
import { PI, sumar, restar } from "../export/uso-export.mjs";

console.log(PI);
console.log(sumar(40, 20));

console.log('Resultado de resta es:', restar(33, 10));

// ----------------------------------------------------------
console.log('----------------------------------------------');

// Realizamos importacion por defecto:
import saludar from "../export/uso-export.mjs";

console.log(saludar('Alberto'));



