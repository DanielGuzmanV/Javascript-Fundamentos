// Creamos una funcion que tome un array de objetos y devuelva un array de pares

let arrayObjects1 = [
    {
        id: 1,
        name: 'Alberto',
        age: 23,
    },
    {
        id: 2,
        name: 'Roberto',
        age: 45,
    },
    {
        id: 3,
        name: 'Remberto',
        age: 18,
    },
    {
        id: 4,
        name: 'Remberto',
        age: 18,
    },
    {
        id: 5,
        name: 'Roberto',
        age: 45,
    },
    {
        id: 6,
        name: 'Remberto',
        age: 18,
    },
];

function buscarPares(arrayObjects) {
    let listaPares = [];

    for(let idx in arrayObjects) {
        
        let element = arrayObjects[idx];
        if(element.id % 2 == 0) {
            listaPares.push([element.id, element]);
        }
        
    }
    return listaPares;
}

let result = buscarPares(arrayObjects1);
console.log(result);
