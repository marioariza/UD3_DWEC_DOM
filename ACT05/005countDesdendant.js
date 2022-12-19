"use strict";

/* Escribe el código que para cada <li> muestra:
¿Cuál es el texto dentro de él (sin el subárbol)? */

// Cogemos todos los li del documento.

let lis = document.querySelectorAll('li');

for (let li of lis) {
    alert(li.textContent); // Mostramos el texto de cada li. 
}

/* El número de <li> anidados: todos los descendientes, incluidos los profundamente */

alert(lis.length); // Mostramos el tamaño del array de los li y veremos cuantos li hay.