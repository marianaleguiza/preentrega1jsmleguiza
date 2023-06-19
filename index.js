let sumaPrecios = 0;
let cantidadCuotas = 3;
let deseaContinuar;

function calcular(sumaPrecios, cantidadCuotas) {
    do {
        let precio = parseFloat(prompt('Ingrese el precio del producto: '));

        if (precio >= 10000 && precio <= 19999) {
            cantidadCuotas = 6;
        } else if (precio >= 20000) {
            cantidadCuotas = 12;
        }

        let subtotal = precio / cantidadCuotas;
        sumaPrecios += precio;

        deseaContinuar = prompt('¿Desea agregar otro producto? (SI/NO):').toUpperCase();
        alert('El precio en cuotas será de: $' + subtotal + ' cada cuota');
    } while (deseaContinuar === 'SI');

    alert('La suma total de los precios es: $' + sumaPrecios);
}

calcular(sumaPrecios, cantidadCuotas);