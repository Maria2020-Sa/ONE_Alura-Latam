let titulo = document.querySelector('h1'); //Método del document para seleccionar una etiqueta del HTMl.
titulo.innerHTML = 'Juego del número secreto'; //modifico el texto usando el método innerHTML.

console.log(titulo);

let parrafo = document.querySelector('p');
 parrafo.innerHTML = 'Indica un número del 1 al 10';

 /*Está función esta siendo llamada por el HTML desde
 <button onclick="intentoUsuario();"  para que aparezca el mensaje al hacer click.*/
 function intentoUsuario(){
    alert('Click desde el botón')
 }