"use strict";

let ul = document.createElement('ul'); // Creamos el ul.

    document.body.append(ul); // Metemos el elemento ul en el body mediante append.

    while (true) { // Realizamos un bucle para pedir texto para nuestra lista.
        
        let texto = prompt("Ingresa el texto:"); // Pedimos el texto al usuario.
        
        if (texto == null || texto == '') {
            break2; // Si el texto es cancelado o realizamos esc, se acabará el bucle.
        } else { // Si no
            let li = document.createElement('li'); // Creamos el li. 
            li.textContent = texto; // Rellenamos el li con lo recogido en el prompt texto.
            ul.append(li); // Metemos el elemento il en el ul mediante append.
        }  
    }