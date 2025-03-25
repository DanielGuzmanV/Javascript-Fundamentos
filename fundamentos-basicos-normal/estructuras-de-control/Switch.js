// Usos del Switch 
// Los datos que se enviaran al switch deben ser igual a los que pide en el case
// de lo contrario no funcionaria y ira por la parte de default, y si usamos break para detenerlo
// si queremos que todo ejecute quitamos el break;
let nota = 80;
switch (nota) {
    case 100:
        console.log("Muy bien");
        break;
    case 80:
        console.log("Bien");
        break;
    case 60: 
        console.log("Regular");
        break;
    case 55:
        console.log("Puede mejorar");
        break;
    case 10:
        console.log("Muy mal...");
        break;
    default:
        console.log("Error");
        break;  
}
console.log('---------------------------------');

let accionString = 'Listar';
switch (accionString) {
    case 'Listar':
        console.log('Ejecutando lista...');
        break;
    case 'Guardar':
        console.log('Guardando...');
        break;
    default:
        console.log('Accion no reconocida');
        break;
}

// Usamos un switch para las fechas:

const fechaActual = new Date();
console.log(fechaActual); // Mostrara la fecha actual:

let varDia = fechaActual.getDay();
// let varDia = 0;
let diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];


switch(varDia) {
    case 0:
    console.log(diaSemana[0]);
    break;
    
    case 1:
    console.log(diaSemana[1]);
    break
        
    case 2:
    console.log(diaSemana[2]);
    break
            
    case 3:
    console.log(diaSemana[3]);
    break
    
    case 4:
    console.log(diaSemana[4]);
    break
        
    case 5:
    console.log(diaSemana[5]);
    break
    
    case 6:
    console.log(diaSemana[6]);
    break

    default:
        console.log('Sin datos...');
        break
}

