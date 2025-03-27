const { primeraTarea, segundaTarea } = require("./tareas-common");


async function menuPrincipal() {
    try {
        console.time("Medir el tiempo: ");

        // Ejecutamos de forma independiente, donde tardaria en total 6s
        // const valueOne = await primeraTarea();
        // const valueTwo = await segundaTarea();

        // Tambien podemos ejecutarlo de forma paralela:
        const resultado = await Promise.all([primeraTarea(), segundaTarea()]);

        console.timeEnd("Medir el tiempo: ");

        console.log("Retornar la primera tarea: ", resultado[0]);
        console.log("Retornar la segunda tarea: ", resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

menuPrincipal();
