//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
let mensajeDeBienvenida = '¡Bienvenido al mundo developer!';
console.log(mensajeDeBienvenida);

/*Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
*/
let nombre = 'Maria';
console.log(`¡Hola, ${nombre}!`);

/*Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
*/
let nombreUsuario = 'Eugenia';
alert('¡Hola, '+nombreUsuario+'!');

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
*/
let lenguajeProgramacion = prompt('¿Cuál es el lenguaje de programación que más te gusta?.');
console.log(lenguajeProgramacion);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos
de tu elección. Realiza la suma de estos dos valores y almacena el resultado en una tercera variable
llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/
let valor1 = 6;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
*/
let edad = parseInt(prompt('Ingrese su edad por favor: '));
if(edad>=18){
    console.log(`El usuario tiene ${edad} años y es mayor de eda.`);
}else{
    console.log(`El usuario tiene ${edad} años y es menor de edad`);
}

/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo
 o cero utilizando un if-else y muestra el mensaje correspondiente.
*/
let numero = parseInt(prompt('Ingrese un numero por favor: '));
if(numero>0){
    console.log('El numero '+numero+' es positivo.');
}else if(numero<0){
    console.log('El numero '+numero+' es negativo.');
}else{
    console.log('El numero '+numero+' es cero.');
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numerosVarios = 1;
while(numerosVarios <=10){
    console.log(numerosVarios);
    numerosVarios++;
}

/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar 
si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/
let nota = 6;
if(nota>=7){
    console.log('Aprobado');
}else{
    console.log('Reprobado');
}

/*Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.*/
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

/*Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.*/
let numeroMaximo=10;
numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroAleatorio);

/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/
numeroMaximo = 100;
numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroAleatorio);