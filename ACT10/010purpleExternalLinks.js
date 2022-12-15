"use strict";

let links = document.querySelectorAll('a');

for (let link of links) {
    let atributo = link.getAttribute('href');

    if (!atributo || !atributo.includes('://') || atributo.startsWith('http://internal.com')){
        continue;
    } 
    
    link.style.color = 'purple';
}