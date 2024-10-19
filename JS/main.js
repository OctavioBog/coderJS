let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

async function dataproductos() {
    let resp = await fetch("../datos.json");
    let data = await resp.json();
    return data;
}

async function mostrarProductos() {
    let productos = await dataproductos(); 
    const contenedorProductos = document.querySelector("#productos");

    productos.forEach((producto) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <img src=${producto.img} alt="${producto.titulo}">
            <h2>${producto.titulo}</h2>
            <p>€${producto.precio}</p>
        `;

        let button = document.createElement("button");
        button.classList.add("button");
        button.innerText = "Agregar al carrito";

        button.addEventListener("click", () => {
            agregaralcarrito(producto);
            Toastify({
                text: `${producto.titulo} ha sido añadido al carrito!`,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function() {}
            }).showToast();
        });

        div.append(button);
        contenedorProductos.append(div);
    });
}

mostrarProductos();

const carritovacio = document.querySelector("#carrito-vacio");
const carritoproductos = document.querySelector("#carrito-productos");
const carritototal = document.querySelector("#carrito-total");

function actualizarcarrito() {
    if (carrito.length === 0) {
        carritovacio.classList.remove("d-none");
        carritoproductos.classList.add("d-none");
        carritototal.innerText = "€0";
    } else {
        carritovacio.classList.add("d-none");
        carritoproductos.classList.remove("d-none");
        
        carritoproductos.innerHTML = "";

        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("productos-car");
            div.innerHTML = `
                <h2>${producto.titulo}</h2>
                <p>€${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Subtotal: €${(producto.cantidad * producto.precio).toFixed(2)}</p>
            `;
            
            let button = document.createElement("button");
            button.classList.add("button");
            button.innerText = "❌";
            button.addEventListener("click", () => {
                if (confirm(`¿Estás seguro de que deseas eliminar ${producto.titulo} del carrito?`)) {
                    borrarcarrito(producto);
                    Toastify({
                        text: `${producto.titulo} ha sido eliminado del carrito.`,
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top",
                        position: "right",
                        stopOnFocus: true,
                        style: {
                            background: "linear-gradient(to right, #ff5c5c, #ff9a9a)",
                        },
                        onClick: function() {}
                    }).showToast();
                }
            });
            
            div.append(button);
            carritoproductos.append(div);

            let buttonaumentar = document.createElement("button");
            buttonaumentar.classList.add("button");
            buttonaumentar.innerText = "⬆️";
            buttonaumentar.addEventListener("click", () => {
                aumentarcantidad(producto);
                Toastify({
                    text: `Cantidad de ${producto.titulo} aumentada a ${producto.cantidad}.`,
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #007bff, #00c4ff)",
                    },
                    onClick: function() {}
                }).showToast();
            });
            div.append(buttonaumentar);

            let buttonreducir = document.createElement("button");
            buttonreducir.classList.add("button");
            buttonreducir.innerText = "⬇️";
            buttonreducir.addEventListener("click", () => {
                reducircantidad(producto);
            });
            div.append(buttonreducir);
        });

        let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2);
        carritototal.innerText = `€${total}`;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregaralcarrito(producto) {
    let itemencontrado = carrito.find((item) => item.id === producto.id);
    if (itemencontrado) {
        itemencontrado.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarcarrito();
}

function borrarcarrito(producto) {
    let indice = carrito.findIndex((item) => item.id === producto.id);
    if (indice !== -1) {
        carrito.splice(indice, 1);
    }
    actualizarcarrito();
}

function aumentarcantidad(producto) {
    let item = carrito.find((item) => item.id === producto.id);
    if (item) {
        item.cantidad++;
        actualizarcarrito();
    }
}

function reducircantidad(producto) {
    let item = carrito.find((item) => item.id === producto.id);
    if (item && item.cantidad > 1) {
        item.cantidad--;
        actualizarcarrito();
    } else if (item && item.cantidad === 1) {
        if (confirm(`¿Estás seguro de que deseas eliminar ${producto.titulo} del carrito?`)) {
            borrarcarrito(producto);
            Toastify({
                text: `${producto.titulo} ha sido eliminado del carrito.`,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #ff5c5c, #ff9a9a)",
                },
                onClick: function() {}
            }).showToast();
        }
    }
}

actualizarcarrito();

