// Ahora realizamos la importacion:
import { funcionExporta1, funcionExporta2 } from "./tareas.esm.mjs";

async function materiasObtenidas() {
    try {
        
        console.time("Tiempo en ejecucion:");

        // lo ejecutamos en paralelo:
        // const resultados = await Promise.all([funcionExporta1(), funcionExporta2()]);
        
        // Lo ejecutamos independientemente:
        const resultado1 = await funcionExporta1();
        const resultado2 = await funcionExporta2();

        console.timeEnd("Tiempo en ejecucion:");

        resultado1;
        resultado2;
        
        // resultados[0];
        // resultados[1];

        // console.log(resultados[0]);
        // console.log(resultados[1]);
    } catch (error) {
        console.log(error);
    }
}

materiasObtenidas();

