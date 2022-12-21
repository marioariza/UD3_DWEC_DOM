"use strict";

let elem = document.querySelectorAll('li');
clear(elem);

function clear(elem) {
    for (let el of elem) {
        el.innerHTML='';
    }
    // Actualizamos el contenido del elemento con id = "elem" y lo ponemos vacío.
}
