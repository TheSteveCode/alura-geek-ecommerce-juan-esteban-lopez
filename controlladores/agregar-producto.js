
import { datos } from "../home.js"


const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    
    const zonaImg = document.querySelector("[data-imagen-prod]")
    
    
    const image = zonaImg.querySelector(".img").src;
    

    const name = document.querySelector("[data-nombre-prod]").value;
    const cost = document.querySelector("[data-precio-prod]").value;
    const category = document.querySelector("[data-cat-prod]").value;
    const description = document.querySelector("[data-desc-prod]").value;
    
    
    if(categoria == "Elige una Categoria"){
        categoria == false
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Debe elegir una categoria',
            showConfirmButton: false,
            timer: 1500
        })

    }else{
        
    datos.createProd(name, cost, image, category, description).then(() => {
        

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto Creado',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(function(){
            window.location.href = "../pantallas/productos.html";
        }, 2000);
        })
        
    }
   


})
