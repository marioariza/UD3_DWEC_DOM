"use strict";

/* Si elem – es un elemento nodo arbitrario del DOM...
¿Es cierto que elem.lastChild.nextSibling siempre es null? */

let elem = document.getElementById("elem");
alert(elem.lastChild.nextSibling);

/* Sí. Al ser elem.lastChild se trata del último elemento, por lo tanto no puede
haber un nextSibling 

Hago el ejemplo escribiendo el nodo "Mario". */

// ---------------------------------

// ¿Es cierto que elem.children[0].previousSibling siempre es null ?

alert(elem.children[0].previousSibling.nodeValue);

/* No, ya que aunque el hijo que seleccionemos sea el primero (children[0]), puede haber un nodo anterior a ese elemento.

Hago el ejemplo escribiendo el nodo "Mario". */

