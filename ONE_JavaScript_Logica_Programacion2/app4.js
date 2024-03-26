/*  Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
    Crea una función que calcule el valor del factorial de un número pasado como parámetro.
    Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
    Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
    Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
    Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

function indiceMasaCorportal (altura, peso){
    let indiceMC = peso/altura;
    console.log(`Para el peso ${peso}kg y la altura de ${altura}mts el IMC es: ${indiceMC}`);
    return indiceMC;
}
indiceMasaCorportal(160, 80);

function valorFactorial (numero){
    let rdo = numero;
    for (let indice=numero; indice>1;indice--){
        rdo *= indice-1;
    }
    console.log('El factorial del '+numero+ 'es: ' +rdo);
    return rdo;
}
valorFactorial(6);

function dolaresAReales (dolares){
    let cotizacion = 4.80;
    let reales = dolares*cotizacion;
    console.log(`La cotización de ${dolares}USD en reales es de: ${reales}`);
    return reales;
}
dolaresAReales(6);

function calculoGeometricoRectangulo (altura, anchura){
    let areaRectangulo = altura*anchura;
    let perimetroRectangulo = (altura*2)+(anchura*2);
    console.log(`El área de un rectangulo es ${areaRectangulo}, y el perimetro es ${perimetroRectangulo}`);
    return perimetroRectangulo;
}
calculoGeometricoRectangulo(10, 5);

function calculaPerimetroCirculo (radio){
    let numeroPi= 3.14;
    let perimetroCirculo = 2*numeroPi*radio;
    console.log(`El perímetro de un círculo es: ${perimetroCirculo}`);
    return perimetroCirculo;
}
calculaPerimetroCirculo(5);

function tablaDeMultiplicar (numeroMultiplicar){
    let tablaNumero = 0;
    for (let indice=1; indice<=10; indice++){
        tablaNumero = numeroMultiplicar*indice;
        console.log(`${numeroMultiplicar} * ${indice} = ${tablaNumero}`);
    }
}
tablaDeMultiplicar(7);