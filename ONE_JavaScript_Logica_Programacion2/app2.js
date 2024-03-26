/*Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto:
"Hora del Desafío".*/
let titulo = document.querySelector('h1');
let ciudadArgentia;
let numero1;
let numero2;
titulo.innerHTML = 'Hora del Desafío';

/*Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
siempre que se presione el botón "Console".*/
function mensajeClickConsolel() {
    alert('El botón fue clicado');
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
preguntando el nombre de una ciudad de Argentina. Luego, muestra una alerta con el 
mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".*/
function mensajeClickPrompt(){
    ciudadArgentia = prompt('Indique una ciudad de Argentina por favor: ');
    alert(`Estuve en ${ciudadArgentia} y me acordé de ti.`);
}

/*Crea una función que muestre una alerta con el mensaje: "Yo amo JS" 
siempre que se presione el botón "Alerta".*/
function mensajeClickAlerta(){
    alert('Yo amo JS');
}

/*Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.*/
function mensajeClickSuma(){
    numero1 = parseInt(prompt('Indique el primer número para la suma: '));
    numero2 = parseInt(prompt('Indique el segundo número para la suma: '));
    alert('El resultado de la suma es '+(numero1+numero2));
}