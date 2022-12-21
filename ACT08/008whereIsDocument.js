"use strict";

/* ¿Dónde está el "document" en la jerarquía? */

/* ¿A qué clase pertenece el document? */

alert(document); // Pertenece a HTMLDocument.

/* ¿Cuál es su lugar en la jerarquía DOM? */

// Están en el prototype del constructor. 

alert(HTMLDocument.prototype.constructor === HTMLDocument); // true

/* ¿Hereda de Node o Element, o tal vez HTMLElement? */