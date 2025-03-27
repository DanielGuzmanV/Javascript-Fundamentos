// Realizaremos nuevas tareas para enviar
// Esta vez usaremos ESM para exportar, es mas moderno

export const funcionExporta1 = materiasAprobadas;
export const funcionExporta2 = materiasReprobadas;

async function materiasAprobadas() {
    try {
        await new Promise(duration => setTimeout(duration, 4000));
        // Usamos un "return"
        // return "Materias aprovadas 3";

        // Usamos "console"
        let materias = ["Historia", "Fisica", "Ingles"]
        for(let idx of materias) {
            console.log('Materias aprobadas:',idx);
        }

    } catch (error) {
        console.log(error);
    }
}

async function materiasReprobadas() {
    try {
        await new Promise(duration => setTimeout(duration, 2000));
        // Usamos "return"
        // return "Materias reprovadas 2";
        
        // Usamos "console"
        let materias = ["Matematicas", "Quimica"]
        for(let idx of materias) {
            console.log('Materias reprobadas:',idx);
        }
    } catch (error) {
        console.log(error);
    }
}



