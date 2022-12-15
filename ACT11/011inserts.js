"use strict";

// Creamos el string de ejemplo que vamos a insertar en el elemento.

let text = 'Texto ejemplo';

// Todas las opciones crean 'Texto ejemplo' dentro del elemento seleccionado.

elem_ej1.append(document.createTextNode(text));
elem_ej2.innerHTML = text;
elem_ej3.textContent = text;