listadoComponentes = [
    {
        id: 1,
        titulo: 'Ram',
        precio: 13000,
        descripción: "esta es una ram de 2400 Mhz",
        img: './imagenes/ram.jpg',
        cantidad: 0,


    },
    {
        id: 2,
        titulo: 'Teclado',
        precio: 2899,
        descripción: "Teclado Noga NKB-GK23",
        img: './imagenes/teclado.jpg,
        cantidad: 0,

    },

    {
        id: 3,
        titulo: 'Disco Solido',
        precio: 22450,
        descripción: "Disco solido de 480 Gb",
        img: './imagenes/disco.jpg',
        cantidad: 0,

    },
    {
        id: 4,
        titulo: 'Procesador',
        precio: 101621,
        descripción: "Micro Procesador Amd Ryzen 5 5600g 4.4ghz Am4 16mb Con Video",
        img: './imagenes/procesador.jpg',
        cantidad: 0,

    },
    {
        id: 5,
        titulo: 'Fuente',
        precio: 27351,
        descripción: "Fuente de alimentación para PC Redragon RPGS GC-PS002 600W negra 100V/240V ",
        img: './imagenes/fuente.jpg',
        cantidad: 0,

    },
    {
        id: 6,
        titulo: 'Tarjeta Grafica',
        precio: 170000,
        descripción: "Placa de video Nvidia Zotac Gaming GeForce GTX 16 Series GTX 1660 SUPER ZT-T16620F-10L 6GB",
        img: './imagenes/tarjetaGrafica.jpg',
        cantidad: 0,

    },
    {
        id: 7,
        titulo: 'Monitor',
        precio: 49699,
        descripción: "Monitor gamer Samsung F22T35 led 22_dark blue gray 100V/240V ",
        img: './imagenes/monitor.jpg',
        cantidad: 0,

    },
    {
        id: 8,
        titulo: 'Gabinete',
        precio: 28000,
        descripción: "Gabinete Gamer Aerocool Mecha Fan Rgb Vidrio Templado",
        img: './imagenes/gabinete.jpg',
        cantidad: 0,

    },
    {
        id: 9,
        titulo: 'Motherboard',
        precio: 77852,
        descripción: "Gigabyte B450 Aorus Amd Am4 Ryzen 4 Gen-Acuario",
        img: './imagenes/auros.jpg',
        cantidad: 0,
    },

    {
        id: 10,
        titulo: 'Mouse',
        precio: 11266,
        descripción: "Mouse Gamer Pc Usb Noga St900 Retroiluminado Led Multicolor",
        img: './imagenes/mouse.jpg',
        cantidad: 0,

    },
    {
        id: 11,
        titulo: 'Auriculares',
        precio: 5000,
        descripción: 'gamer Kotion G2000 negro y rojo con luz LED',
        img: './imagenes/auricular.jpg',
        cantidad: 0,

    },
    {
        id: 12,
        titulo: 'Mouse Pad',
        precio: 10000,
        descripción: 'Gadnic Gamer Xl Rgb 800 X 300 X 4 Mm Speed Edition 7 Modos Rgb',
        img: './imagenes/mousePad.jpg',
        cantidad: 0,

    },

];
const componentes = document.querySelector("#listadoComponentes");
const botonPrecioAscen = document.querySelector("#precioAscendente");
const botonPrecioDescen = document.querySelector("#precioDescendente");
const botonidAscendente = document.querySelector("#idAscendente");
const botonidDescendente = document.querySelector("#idDescendente");
const inputBuscador = document.querySelector("#buscador");
const carrito = document.querySelector("#seccionCarrito");
const sumaCarrito = document.querySelector("#totalCarrito");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const cartelC = document.querySelector("#mostrarCartel")
const menuHamburguesa = document.querySelector("#btnMenu");
const btnCerrar = document.querySelector("#btncerrar");
const navegacion = document.querySelector(".menuCabecera");
const finalizarCompra = document.querySelector("#finalizar");
const form = document.querySelector("#formulario");
let listaCarrito = [];
let prodCarrito = 0;
let totalCarrito = 0;

function mostrarComponentes() {
    listadoComponentes.forEach((c) => componentes.innerHTML += `<li class="items" ><h2>${c.titulo}<br></h2> 
                                                            <div class="contenedorImagen"> <img src="${c.img}" alt="imagenes"></div><br>
                                                               ${c.descripción}<br>
                                                               ${c.id}<br>
                                                               $${c.precio}<br>
                                                               <button class="btn" id="comprar${c.id}">comprar</button>
                                                               </li>`);

    listadoComponentes.forEach((c) => {
        document.getElementById(`comprar${c.id}`).addEventListener("click", () => {
            agregarAlCarrito(c);
            mostrarTotal();
            finalizarCompra.classList.remove("ocultar");
            finalizarCompra.classList.add("mostrar");


        })
    })
}

function mostrarTotal() {
    sumaCarrito.innerHTML = `<div class="precioTotal"> Precio total : $${totalCarrito} cantidad de items : ${prodCarrito}</div>`;
}

function agregarAlCarrito(c) {
    if (listaCarrito.find((el) => el.id === c.id)) {
        Swal.fire('Ya se agrego un producto en el carrito')
    } else {
        listaCarrito.push(c);

    }
    mostrarCartel();
    prodCarrito++;
    c.cantidad++;
    totalCarrito += c.precio;
    carrito.innerHTML = "",
        listaCarrito.forEach((c) => {
            carrito.innerHTML +=
                `<li class="pasoD" >
                 <h2>${c.titulo}<br></h2> 
                <img src="${c.img}" alt=""><br>
                $${c.precio}<br>
                Cantidad: ${c.cantidad}
                </li>`


        })
}


function mostrarCartel() {
    if (listaCarrito.length === 0) {
        cartelC.innerHTML = "<b> No hay elementos en el carrito <b> ";
        vaciarCarrito.classList.add("ocultar");
    } else {
        cartelC.innerHTML = "";
        vaciarCarrito.classList.remove("ocultar");
    }

}


//<--------------------------------FUNCTION----------------------------------->
function agregarListener() {
    botonPrecioAscen.addEventListener("click", () => ordenarPrecioAscendente());
    botonPrecioDescen.addEventListener("click", () => ordenarPrecioDescendente());
    botonidAscendente.addEventListener("click", () => ordenarIdAscendente());
    botonidDescendente.addEventListener("click", () => ordenarIdDescendente());
    vaciarCarrito.addEventListener("click", () => carritoS());
    inputBuscador.addEventListener("keyup", (e) => buscar(e));
    menuHamburguesa.addEventListener("click", () => {
        menuHamburguesa.classList.add("ocultar");
        btnCerrar.classList.add("mostrar");
        navegacion.classList.add("mostrar");
        menuHamburguesa.classList.remove("mostrar");

    })
}
btnCerrar.addEventListener("click", () => {
    menuHamburguesa.classList.add("mostrar");
    btnCerrar.classList.remove("mostrar");
    btnCerrar.classList.add("ocultar");
    navegacion.classList.remove("mostrar");
    navegacion.classList.add("ocultar");
})
finalizarCompra.addEventListener("click", () => {
    document.formulario.titulo.value = listaCarrito.map(prod => prod.titulo);
    document.formulario.cantidad.value = listaCarrito.map(prod => prod.cantidad);
    document.formulario.totalCarrito.value = totalCarrito;
    form.classList.remove("ocultar");
    form.classList.add("mostrar");


})


function ordenarPrecioAscendente() {
    listadoComponentes.sort((a, b) => a.precio - b.precio);
    componentes.innerHTML = "";
    mostrarComponentes();
}
function ordenarPrecioDescendente() {
    listadoComponentes.sort((a, b) => b.precio - a.precio);
    componentes.innerHTML = "";
    mostrarComponentes();
}
function ordenarIdAscendente() {
    listadoComponentes.sort((a, b) => a.id - b.id);
    componentes.innerHTML = "";
    mostrarComponentes();
}
function ordenarIdDescendente() {
    listadoComponentes.sort((a, b) => b.id - a.id);
    componentes.innerHTML = "";
    mostrarComponentes();
}

function buscar(e) {
    const lista = document.querySelectorAll(".items");
    lista.forEach((li) => {
        if (li.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            li.classList.remove("ocultar");
        } else {
            li.classList.add("ocultar");

        }
    })

}
function carritoS() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'seguro que quieres eliminar el producto?',

        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'cancelar',
        confirmButtonText: 'Eliminar',
        reverseButtons: false,

    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Tu carrito se elimino con exito',
                'Sigue comprando.',

                listaCarrito.forEach((e) => {
                    listaCarrito = [];
                    prodCarrito = 0;
                    totalCarrito = 0;
                    e.cantidad = 0;
                    carrito.innerHTML = "";
                    mostrarTotal();
                    mostrarCartel();
                    sumaCarrito.innerHTML = "";
                    finalizarCompra.classList.remove("mostrar");
                    finalizarCompra.classList.add("ocultar");
                    form.classList.add("ocultar");
                    form.classList.remove("mostrar");



                })


            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'cancelado',
                'sigue comprando',
                'error',
            )

        }
    })


}
mostrarComponentes();
agregarListener();
mostrarCartel();
