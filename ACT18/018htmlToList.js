"use strict";

let segundo_li = document.createElement('li'); // Creamos el segundo li.
segundo_li.appendChild(document.createTextNode('2')); // Insertamos el texto '2' para el segundo li.
let tercer_li = document.createElement('li'); // Creamos el tercer li.
tercer_li.appendChild(document.createTextNode('3')); // Insertamos el texto '3' para el tercer li.

let ultimo_li = document.getElementById('two'); // Cogemos el último li que cogemos de referencia para insertar los dos nuevos delante de el.

document.getElementById('ul').insertBefore(segundo_li, ultimo_li); // Insertamos el segundo li delante del último li. (1,2,4)
document.getElementById('ul').insertBefore(tercer_li, ultimo_li); // Insertamos el tercer li delante del último li. (1,2,3,4)