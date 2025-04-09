// Ejemplos practicos (avanzados)

// Ejemplo 1: Recorremos el arbol (Estructura de nodos)
const arbolNodos = {
    valor: 'raiz',
    hijos: [
        {
            valor: 'nodo 1',
            hijos: [],
        },
        {
            valor: 'nodo 2',
            hijos: [
                {
                    valor: 'nodo 2.1',
                    hijos: [],
                },
                {
                    valor: 'node 2.2',
                    hijos: [],
                }

            ]
        }
    ],
}

function recorrerArbol(nodos) {
    console.log(nodos.valor)
    
    for(const hijos of nodos.hijos){
        recorrerArbol(hijos);
    }
}

recorrerArbol(arbolNodos);

console.log('===============================================')

// Ejemplo 2: Comparacion profunda de objetos:
function compararObjetos(obj1,obj2) {
    // Si son identicos por referencia:
    if(obj1 === obj2) return true;

    // Si alguno no es objeto o es null, y no son iguales:
    if(
        typeof obj1 !== 'object' || obj1 === null || 
        typeof obj2 !== 'object' || obj2 === null
    ) {
        return false;
    }
    
    // Ahora vemos las Keys:
    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);

    if(claves1.length !== claves2.length) return false;

    for(let elementos of claves1) {
        if(!claves2.includes(elementos)) return false;
        if(!compararObjetos( obj1[elementos], obj2[elementos] )) return false;
    }

    return true;
}

// Usamos objetos iguales:

const objeto1 = {
    nombre: 'Alex',
    datos: {
        edad: 30,
        ciudad: 'chapultepec',
    },
};
const objeto2 = {
    nombre: 'Alex',
    datos: {
        edad: 30,
        ciudad: 'chapultepec',
    },
};

console.log('Los objetos son iguales:', compararObjetos(objeto1, objeto2))

console.log('===============================================')

// Ejemplo 3: conversion de Objeto plano => Objeto anidado:
// Uso: Supongamos que recibimos datos como este objeto:
const datosPlanos = {
    "usuario.nombre": "Laura",
    "usuario.edad": 28,
    "usuario.contacto.email": "laura@example.com",
    "usuario.contacto.tel": "123-456",
};

// Y lo que realmente necesitamos es:
{
    usuario: {
        nombre: "Laura";
        eda: 28;
        contacto: {
        email: "laura@example.com";
        tel: "123-456"
        }
    }
}

// Para ello usaremos un convertidor recursivo:
function convertPlanoAnidado(objetoPlano) {
    const resultado = {};

    for(const clave in objetoPlano) {
        // Dividimos la clave en un array de partes
        const partes = clave.split('.');
        // console.log(partes); // Vemos lo que hace:
        let temp = resultado;

        // Recoremos cada parte de la clave, creando objetos donde sea necesario:
        partes.forEach((parte, index) => {
            // console.log(parte, index);
            if(index === partes.length - 1){
                // Asignamos el valor final
                temp[parte] = objetoPlano[clave];
            } else {
                // Si no existe, creamos el objeto
                temp[parte] = temp[parte] || {};
            }

            // Avanzamos al siguiente nivel del objeto
            temp = temp[parte];
        });
    }

    return resultado;
}

// Probamos la funcion:
const datosAnidados = convertPlanoAnidado({
    "usuario.nombre": "Marcelo",
    "usuario.edad": 45,
    "usuario.contacto.email": "marcelo@example.com",
    "usuario.contacto.tel": "456-789"
})

// Vemos los resultados:
console.log(datosAnidados);
console.log(convertPlanoAnidado(datosPlanos));


// ===============================

// Ahora realizamos la version inversa: 
// Objeto anidado => Objeto plano
// Uso: a veces necesitamos enviar datos por una API o almacenarlos en una
// base de datos, y te piden un formato plano, pero tenemos un objeto anidado

// Funcion recursiva para aplanar
function aplanarObjeto(objeto, padre = '', resultado = {}) {
    for(const clave in objeto) {
        const valor = objeto[clave];
        const nuevaClave = padre ? `${padre}.${clave}` : clave;

        if(typeof valor === 'object' && valor !== null && !Array.isArray(valor)) {
            // Si es un objeto, recusividad
            aplanarObjeto(valor, nuevaClave, resultado)
        } else {
            resultado[nuevaClave] = valor;
        }
    }
    return resultado;
}

// Probamos la funcion:
const objDatosAnidados = {
    usuario: {
        nombre: "Alvaro",
        edad: 35,
        contacto: {
        email: "alvaro@example.com",
        tel: "456-123",
        },
    },
};

const plano = aplanarObjeto(objDatosAnidados);
console.log(plano);

// ========================================================
console.log('=============================================')
// ========================================================

// Validacion recursiva de estructura JSON:
function validarEstructura(json, esquema) {

    for(const clave in esquema) {
        const tipoEsperado = esquema[clave];
        const valor = json[clave];

        if(typeof tipoEsperado === 'object' && !Array.isArray(tipoEsperado)) {
            // Si el tipo esperado es un obj (revisamos el esquema mas profundamente)
            if(typeof valor !== 'object' || valor === null) {
                console.error(`La clave ${clave} debe ser un valor`);
                return false;
            }
            if(!validarEstructura(valor, tipoEsperado)) {
                return false;
            }
        }

        else if (typeof tipoEsperado == 'String') {
            // Si el tipo esperado es un string
            if(typeof valor !== tipoEsperado) {
                console.error(`La clave ${clave} debe ser de tipo ${tipoEsperado}`);
                return false;
            }
        }
        else if(Array.isArray(tipoEsperado)) {
            // Si el tipo esperado es un array
            if(!Array.isArray(valor)) {
                console.error(`La clave ${clave} debe ser un array`);
                return false;
            }
        }
    }
    return true;
}

// Este seria el esquema que debe seguir nuestro JSON
const esquemaJson = {
    usuario: {
        nombre: 'string',
        edad: 'number',
        contacto: {
            email: 'string',
            telefono: 'string',
        },
        preferencias: ['string'],
    }
};

const jsonValido = {
    usuario: {
        nombre: "Laura",
        edad: 28,
        contacto: {
        email: "laura@example.com",
        telefono: "123-456",
        },
        preferencias: ["música", "viajes"],
    },
};

const jsonInvalido = {
    usuario: {
        nombre: "Laura",
        edad: "28", // Nos saldria un error, ya que debe ser un numero
        contacto: {
        email: "laura@example.com",
        telefono: "123-456",
        },
        preferencias: "música", // Nos saldria un error, ya que debe ser un array
    },
};


// Usamos los objetos en la funcion:
console.log(validarEstructura(jsonValido, esquemaJson));
console.log('------------------------------------------')
console.log(validarEstructura(jsonInvalido, esquemaJson));


