import { datos } from "../home.js";
import { mostrarProducto } from "./unproducto.js";

const seccionProd = document.querySelector("[data-productos]")


datos.prodList().then(informacion =>{
    informacion.forEach(({nombre, precio, id,  imagen}) => {
        const nuevoProducto = mostrarProducto(nombre, precio, id, imagen)
        seccionProd.appendChild(nuevoProducto)


    })
})

