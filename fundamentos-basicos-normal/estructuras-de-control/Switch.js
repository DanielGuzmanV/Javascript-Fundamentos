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


