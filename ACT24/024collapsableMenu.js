"use strict";

let boton = document.getElementById('boton'); // Recogemos el boton mediante el id.

function desplegar() {

    let contenido = boton.nextElementSibling; // Recogemos el contenido que tenemos que desplegar

    if (contenido.style.display === "block") { // Si el contenido esta desplegado lo ocultamos.
        contenido.style.display = "none";
    } else { 
        contenido.style.display = "block"; // Si el contenido esta oculto lo desplegamos.
    }
}


