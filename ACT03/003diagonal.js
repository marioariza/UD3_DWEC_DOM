"use strict";

let trs = document.querySelectorAll('tr'); // Recogemos los tr.
let tds = document.querySelectorAll('td'); // Recogemos los tr.
let pos = 0; 

for (let i = 0; i < tds.length; i++) {
  if (i > trs.length) {
    pos += trs.length + 1; // Si la posición es el tamaño de los tr + 1 pintamos de rojo.
    tds[pos].style.backgroundColor= "red";
    tds[pos].style.color = "white";
  } else {
    tds[pos].style.backgroundColor = "red"; // Si i es mayor que el tamaño de los tr pintamos de rojo.
    tds[pos].style.color = "white";
  }
}