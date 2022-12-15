"use strict";

let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert(body.firstChild.data); // ¿qué hay aquí?

/* BODY, ya que se reemplaza el contenido de body con el comentario que realizamos en el innerHTML.

Entonces ahora el comentario es el unico hijo de body */