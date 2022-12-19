"use strict";

let boton = document.getElementById('boton');

function desplegar() {

    let contenido = boton.nextElementSibling;

    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else { 
        contenido.style.display = "block";
    }
}


