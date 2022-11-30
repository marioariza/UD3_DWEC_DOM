"use strict";

/* Si elem – es un elemento nodo arbitrario del DOM...
¿Es cierto que elem.lastChild.nextSibling siempre es null? */

/* Sí. Al ser elem.lastChild se trata del último elemento, por lo tanto no puede
haber un nextSibling */

let elem = document.getElementById("elem");
alert(elem.lastChild.nextSibling);

// ---------------------------------

// ¿Es cierto que elem.children[0].previousSibling siempre es null ?



