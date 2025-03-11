// Realizamos una funcion que devuelve el nombre de la resolucion
// dependiendo de los valores

function resolucionPantallas(ancho, alto) {
    
    if(ancho >= 7680 && alto >= 4320) {
        return 'La resolucion es: 8K';
    } else if(ancho >= 3840 && alto >= 2160) {
        return 'La resolucion es: 4k';
    } else if(ancho >= 2560 && alto >= 1440) {
        return 'La resolucion es: WQHD';
    } else if(ancho >= 1920 && alto >= 1080) {
        return 'La resolucion es: FHD';
    } else if(ancho >= 1280 && alto >= 720) {
        return 'La resolucion es: HD';
    } else {
        console.log('Los siguientes valores', ancho, 'y', alto, 'estan fuera de rango');
    }

}

let valorResolucion = resolucionPantallas(1080, 720);
console.log(valorResolucion);












