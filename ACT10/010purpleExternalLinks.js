"use strict";

let links = document.querySelectorAll('a'); // Recogemos los a.

for (let link of links) { // Recorremos todos los links.

    let atributo = link.getAttribute('href'); // Comprobamos el contenido que tiene cada link dentro de su atributo href.

    // Si no tiene atributo o no contiene :// o empieza por http://internal.com, continuaremos y pintaremos el link de morado.

    if (!atributo || !atributo.includes('://') || atributo.startsWith('http://internal.com')){
        continue;
    } 

    link.style.color = 'purple';
    
}