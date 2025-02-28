//Casos especialesl Break, continue
//Primer ejemplo 
let lista1 = [1, 2, 3, 4, 5, 6, 7, 8,];

for (let a = 0; a < lista1.length; a++) {
    console.log(lista1[a]);
}
console.log("---------------------------------------------");

let lista = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < lista.length; i++) {

    //Usamos la palabra de CONTINUE para que no aparesca el 3
    if (lista[i] === 3){
        continue;
    }
    console.log(lista[i]);
    
    //ahora usaremos la palabra reservada de break
    if (lista[i] > 5) {
        break;
    }
}

//Cual es el ambito de un bucle 