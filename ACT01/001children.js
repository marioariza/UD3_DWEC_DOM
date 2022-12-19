"use strict";

/* Para cada una de las siguientes preguntas, da al menos una forma de cómo acceder a 
ellos:
¿El nodo <div> del DOM? */

let div = document.querySelector("div"); // querySelector("div") nos devuelve el elemento div del documento.
let mostrar_div = div.outerHTML; // con outerHTML mostramos lo que contiene el div encontrado en el querySelector.
alert(div + " : \n\n" + mostrar_div); // <div>Users:</div>

// ¿El nodo <ul> del DOM?

let ul = document.querySelector("ul"); // querySelector("ul") nos devuelve el elemento ul del documento.
let mostrar_ul = ul.outerHTML; // con outerHTML mostramos lo que contiene el ul encontrado en el querySelector.
alert(ul + " : \n\n" + mostrar_ul); 
/*  <ul>
        <li>Steve Rogers</li>
        <li>Peter Parker</li>
    </ul>
*/

// ¿El segundo <li> (con Peter Parker)?

let li = ul.children[1]; // con ul.children[1], encontramos el segundo hijo del elemento ul buscado en la línea 13.
let mostrar_li = li.outerHTML; // con outerHTML mostramos lo que contiene el li encontrado en el children[1].
alert(li + " : \n\n" + mostrar_li); // <li>Peter Parker</li>