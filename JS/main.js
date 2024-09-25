
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const productos = [
    {
        id: "Yerba CBSE",
        img: "../img/file(1).png",
        precio: 7,
        titulo: "Yerba CBSE",
        cantidad: 1,
    },
    {
        id: "Yerba Union",
        img: "../img/file(2).png",
        precio: 6,
        titulo: "Yerba Union",
        cantidad: 1,
    },
    {
        id: "Yerba Taragüi",
        img: "../img/file.png",
        precio: 5,
        titulo: "Yerba Taragüi",
        cantidad: 1,
    }
];

const contenedorProductos = document.querySelector("#productos");
const carritovacio = document.querySelector("#carrito-vacio");
const carritoproductos = document.querySelector("#carrito-productos");
const carritototal = document.querySelector("#carrito-total");

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
    });

    div.append(button);
    contenedorProductos.append(div);
});

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
                <p>Cantidad:${producto.cantidad}</p>
                <p>subt:€${producto.cantidad * producto.precio}</p>
            `;
            let button = document.createElement("button");
            button.innerText = "❌";
            button.addEventListener("click", () => {
                borrarcarrito(producto);
            
            })
            div.append(button);
            carritoproductos.append(div);
        });

        
        let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
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
    if (indice !== -1){
        carrito.splice(indice,1);
    }
    actualizarcarrito();
    
    }
    actualizarcarrito();