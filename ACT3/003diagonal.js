"use strict";

let trs = document.querySelectorAll('tr');
let tds = document.querySelectorAll('td');
let contador = 0;

for (let i = 0; i < tds.length; i++) {
  if (i > trs.length) {
    tds[contador + trs.length + 1].style.backgroundColor= "red";
    contador = contador + trs.length + 1;
  } else {
    tds[contador].style.backgroundColor = "red";
  }
}