// Realizamos las tareas que enviaremos
// Este modo de exportacion es clasica usando commonJs
const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    
    async primeraTarea() {
        try {
            // Se ejecutar cuando ocurra un error, pero el programa seguira funcionando:
            // throw new Error("Ocurrio algun error");
            await sleep(4000);
            return "Tarea del primer Valor";
        } catch (error) {
            console.log(error)
        }

    },

    // Si sucede el error, este continuara aqui:
    async segundaTarea() {
        try {
            // throw new Error("Ocurrio algun error");
            await sleep(2000);
            return "Tarea del egundo Valor";
        } catch (error) {
            console.log(error);
        }
    }
}


