"use strict"

alert(table); // la tabla, tal como debería ser
table.remove();

/* ¿Por qué aún está "aaa" en el documento? */

// Esto sucede debido a que solo coge las etiquetas específicas de la tabla y deja el texto 'aaa' fuera de ella.

let aaa = table.children[0].previousSibling.nodeValue;
alert('aaa');
