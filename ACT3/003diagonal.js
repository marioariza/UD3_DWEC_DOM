"use strict";

let trs = document.querySelectorAll('tr');
let tds = document.querySelectorAll('td');
let pos = 0;

for (let i = 0; i < tds.length; i++) {
  if (i > trs.length) {
    pos += trs.length + 1;
    tds[pos].style.backgroundColor= "red";
  } else {
    tds[pos].style.backgroundColor = "red";
  }
}