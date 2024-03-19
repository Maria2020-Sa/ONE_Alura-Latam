/*
Desafíos:
    Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
    Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
    Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
    Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
    Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

let nombre = prompt('Ingrese su nombre por favor')
let diaDeSemana = prompt('¿Que día de la semana es?: ');
let numeroIngresado = parseInt(prompt('Ingrese un número cualquiera'));
let puntuacion = 0;
let puntuacionMaxima = 100;
let saldoCuenta = 20000;

alert('Te damos la bienvenida ' + nombre);
alert(`El numero ingresado ${numeroIngresado}, es ${numeroIngresado>0 ? 'Positivo' : 'Negativo'}`);
alert(`El saldo de tu cuenta es: ${saldoCuenta}`);

if(diaDeSemana=="Sábado" || diaDeSemana=="Domingo"){
    alert('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
}

puntuacion = parseInt(prompt('Ingrese la puntuación del juego: '));
if(puntuacion >= puntuacionMaxima){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intenta nuevamente para ganar.");
}