"use strict";

function handler() {
    alert( "..." );
    return false;
}

// El navegador lee un atributo on como onclick y crea el controlador a partir de su contenido.

// Para solucionarlo solo debemos retornar la función en el onclick. onclick='return handler()'.