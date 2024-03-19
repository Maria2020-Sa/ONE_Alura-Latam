//Declarar variable: puede ser const, let o var. La nomenclatura bien clara y específia con camellcase
let numeroMaximoPosible = 100
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;

//para mostrar el dato almacenado en la consola:
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Indique un número del 1 al ${numeroMaximoPosible} por favor: `));
    
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto){//llave de bloque de codigo
        alert(`Acertaste el número secreto es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else
            alert('El número secreto es mayor');
    }
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;

    /*dejar condiciones con valores literales no es una buena práctica,
     ya que complica la mantenibilidad y el crecimiento de nuestro programa. 
    if(intentos > 3){
        alert('Lo siento, has excedido el número de intentos');
        break;
    }*/

    if(intentos > maximoIntentos){
        alert(`Lo siento, has excedido el máximo de ${maximoIntentos} intentos`);
        break;
    }
}