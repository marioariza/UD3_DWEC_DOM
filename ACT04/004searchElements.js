"use strict";

/* La tabla con id='age-table'. */

// Cogemos el elemento de la tabla con id = 'age-table'.

let tabla = document.getElementById("age-table");
alert(tabla);

/* Todos los elementos label dentro de la tabla (debería haber 3). */

// Cogemos todos los label que tenemos en la tabla. 

let labels = tabla.querySelectorAll('label');

// Recorremos los label y los mostramos los elementos. (Se deben mostrar 3).

for (let label of labels) {
    alert(label);
}

/* El primer td en la tabla (con la palabra “Age”). */

// Cogemos todos los label que tenemos en la tabla. 

let tds = tabla.querySelectorAll('td');

// Mostramos el elemento del primer td.  

alert(tds[0]);

/* El form con name="search". */

// Cogemos el elemento form con name search.

let form = document.querySelector('form[name="search"');
alert(form);

/* El primer input en ese formulario. */

// Cogemos todos los input que tenemos en ese formulario. 

let inputs = form.querySelectorAll('input');
alert(inputs[0]);

/* El primer input en ese formulario. */

alert(inputs[inputs.length-1]); // Input en la posición (tamaño del array inputs - 1, es decir la última posición).