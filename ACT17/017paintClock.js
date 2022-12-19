"use strict";

function reloj() {

    let fecha_actual = new Date(); // Recogemos la fecha actual.

    let hora = fecha_actual.getHours(); // Recogemos la hora actual dentro de la fecha actual.
    let minutos = fecha_actual.getMinutes(); // Recogemos los minutos actuales dentro de la fecha actual.
    let segundos = fecha_actual.getSeconds(); // Recogemos los segundos actuales dentro de la fecha actual.
    
    // Recogemos los span de las horas,minutos,segundos para insertarselos a continuación mediante innerHTML.
    let span_horas = document.getElementById('horas');
    let span_minutos = document.getElementById('minutos');
    let span_segundos = document.getElementById('segundos');

    if (hora < 10) { // Si la hora es menor a 10, le añadimos un 0 delante para que sea mejor visualmente (21:7:3 se vería 21:07:03).
        hora = '0' + hora; 
    } else if (minutos < 10) {
        minutos = '0' + minutos;
    } else if (segundos < 10) {
        segundos = '0' + segundos;
    }

    span_horas.innerHTML = hora; // Insertamos la hora actual en nuestro span html.
    span_minutos.innerHTML = minutos; // Insertamos los minutos actuales en nuestro span html.
    span_segundos.innerHTML = segundos; // Insertamos los segundos actuales en nuestro span html.



}

let actualizar;

function activar() { 
    actualizar = setInterval(reloj, 1000); // Actualizamos el reloj cada segundo.
    reloj(); // Llamamos a la function reloj para mostrarlo e irlo actualizando.
}

function parar() {
    clearInterval(actualizar); // Paramos el reloj y su actualización.
}