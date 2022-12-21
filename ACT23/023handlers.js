"use strict";

let button = document.getElementById('boton');

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

/* Muestra 1 (de la primera línea) y 2 (de la tercera línea). No muestra la segunda línea ya que 
lo hace es quitar el evento click y no muestra el alert. */