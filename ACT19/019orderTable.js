"use strict";

let columnas = document.querySelectorAll('tr');

let names;

for (let i = 1; i < columnas.length; i++) {
    names[i-1] = columnas[i].firstElementChild;
}

names.sort();


for (let i = 1; i < columnas.length; i++) {
  columnas[i].firstElementChild.innerHTML = names[i-1];
}

// let sortedRows = Array.from(table.tBodies[0].rows) // 1
//   .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

// table.tBodies[0].append(...sortedRows); // (3)