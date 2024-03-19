//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while(contador<=10){
    alert(contador);
    contador++;
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;
while(contador2 >= 0){
    alert(contador2);
    contador2--;
}

/*
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.
*/
let numeroUsuario = parseInt(prompt('Escribe un número para la cuenta regresiva: '));
let cuentaRegresiva = 0;
while(cuentaRegresiva <= numeroUsuario){
    alert(numeroUsuario);
    numeroUsuario--;
}