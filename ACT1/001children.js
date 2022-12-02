"use strict";

/* Para cada una de las siguientes preguntas, da al menos una forma de cómo acceder a 
ellos:
¿El nodo <div> del DOM? */

let div = document.querySelector('div');
div.style.color = "green";
alert(div);

// ¿El nodo <ul> del DOM?

let ul = document.querySelector('ul');
ul.style.color = "red";
alert(ul);

// ¿El segundo <li> (con Peter Parker)?

let li = document.querySelector('ul').lastElementChild;
li.style.color = "blue";
alert(li);