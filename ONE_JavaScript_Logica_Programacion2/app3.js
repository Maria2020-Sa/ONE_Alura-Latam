/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

function mostrarMensajeEnConsola(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
mostrarMensajeEnConsola('h1','¡Hola, mundo!');

function mostrarNombre (texto){
    let nombre = texto;
    console.log(`¡Hola, ${nombre}!`);
    alert(`¡Hola, ${nombre}!`);
}
mostrarNombre('Maria');

function dobleDeNumero (numero){
    let resultado = numero * 2;
    console.log('El doble del número es: '+resultado);
    return resultado;
}
dobleDeNumero(6);

function calculoDePromedio (numero1, numero2, numero3){
    let promedio = (numero1+numero2+numero3)/3;
    console.log('El promedio es: '+promedio);
    return promedio;
}
calculoDePromedio(9, 8, 9);

function numeroMayor (numero1, numero2){
    if (numero1 > numero2){
        console.log('El número mayor es '+numero1);
    }else{
        console.log('El número mayor es '+numero2);
    }
}
numeroMayor(45, 63);

function numeroUnico (numero){
    let resultado = numero*numero;
    console.log(`El resultado de multiplicar el mismo número es ${resultado}`);
}
numeroUnico(7);
