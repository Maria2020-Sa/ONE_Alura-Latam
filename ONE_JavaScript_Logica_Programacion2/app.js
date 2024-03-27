
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 10;

/*Buenas practicas:
creamos una función lo más genérica posible, para poder reutilizarla y modularizar el codigo,
También siempre colocar return. */
function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//input del html
   
   if(numeroDeUsuario === numeroSecreto){//triple igual, tiene que ser igual en valor e igual en tipo de datos". Si no, nos va a devolver falso. 
      asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos===1)?'vez':'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if(numeroDeUsuario > numeroSecreto){
         asignarTextoElemento('p','El número secreto es menor');
      }else{
         asignarTextoElemento('p','El número secreto es mayor');
      }
      intentos++;
      limpiarCaja();
   }
   return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroSecreto);
   console.log(listaNumeroSecreto);
   //Si ya sorteamos todos los números: Condicion del numeroMaximo que soluciona la recursividad.
   if(listaNumeroSecreto.length == numeroMaximo){
      asignarTextoElemento('p','Ya se sortearon todos los números posibles');
   }else{
      //Si el numero generado esta incluido en la lista:
      if(listaNumeroSecreto.includes(numeroGenerado)){
         return generarNumeroSecreto();//Función recursiva, ya que se llama a si mismo. requieren de una condición de fin (para evitar un bucle infinito o recursión infinita)
      }else{
         listaNumeroSecreto.push(numeroGenerado);
         return numeroGenerado;
      }
   }
   
}

function condicionesIniciales(){
   asignarTextoElemento('h1','Juego del número secreto!!');
   asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   console.log(numeroSecreto);
}

function reiniciarJuego(){
   //Limpiar la caja;
   limpiarCaja();
   //Indicar mensaje de intervalo de números;
   //Generar número aleatorio;
   //Inicializar el número de intentos;
   condicionesIniciales();   
   //Deshabilitar el botón de nuevo juego;  
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();