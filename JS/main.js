function ingresarproductos() {
    let productos = [];
    let continuar = true;

    while (continuar) {
        const articulo = prompt("Ingresa el producto").toLowerCase();
        
        const productoExistente = productos.find(p => p.articulo === articulo);
        if (productoExistente) {
            alert("Este producto ya ha sido ingresado.");
            continue;
        }

        const precio = parseFloat(prompt("Ingresa el precio del producto"));
        if (isNaN(precio) || precio < 0) {
            alert("Ingresa un precio válido");
            continue;
        }

        productos.push({ articulo: articulo, precio: precio });

        let respuesta = prompt("¿Desea agregar algún producto más? SI/NO").toLowerCase();
        while (respuesta !== "si" && respuesta !== "no") {
            alert("Respuesta inválida, por favor ingrese SI o NO.");
            respuesta = prompt("¿Desea agregar algún producto más? SI/NO").toLowerCase();
        }

        if (respuesta === "no") {
            continuar = false;
        }
    }

    return productos;
}



function cuotas(productos) {
    const pagos = parseInt(prompt("Ingresa en cuántas cuotas quieres pagar. 1/3/6"));
    const suma = productos.reduce((acc, producto) => acc + producto.precio, 0);
    switch (pagos) {
        case 1:
            return suma;
        case 3:
            return suma / 3;
        case 6:
            return suma / 6;
        default:
            alert("Opción no válida. Mostrando el precio total.");
            return suma;
    }
    
}

function mostrarResumen(productos) {
    let resumen = "";
    console.log('%c Resumen de la compra:' , 'color: red; font-weight: bold;');
    productos.forEach(producto => {
        resumen += `Producto: ${producto.articulo}, Precio: $${producto.precio.toFixed(2)}\n`;
    });

    const total = productos.reduce((acc, producto) => acc + producto.precio, 0);
    resumen += `Total compra: $${total.toFixed(2)}`;
    console.log(resumen);
}

let productos = ingresarproductos();
let totalCuota = cuotas(productos);
mostrarResumen(productos);
console.log(`%c Total a pagar por cuota: $${totalCuota.toFixed(2)}`,'color: red; font-weight: bold;');

