// Ahora llamamos a las funciones creadas
//
// ```
// Para evitar problmas con el uso de "CommonJs" configuraremos el "package.json"
// donde pondremos "type": "commonjs"

// Y si pusimos anteriormente "type": "module" podremos cambiar sin problema por "type": "commonjs"
// pero no usar ambos, para eso cambiamos las extenciones de los archivos de (uso-export y uso-import) a ".mjs"
// para poder ejecutar las dos formas de modulos
// ```

const usoCommonsjs = require("../export/uso-module-export");

console.log("El resultado es:", usoCommonsjs.multiplicar(2, 5));