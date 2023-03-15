//ejercicio 1: La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes
//presentarse de una manera más interactiva y eficiente , por eso deciden acudir a un
//programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad
//favorita y deporte favorito en una tarjeta de presentación predeterminada

let nombre, edad, actividadFavorita, deporteFavorito;
nombre = prompt('Ingrese su nombre completo');
edad = parseInt(prompt('Ingrese su edad'));
actividadFavorita = prompt('Ingrese su actividad favorita');
deporteFavorito = prompt('Ingrese su deporte favorito');
document.write(`El estudiante de nombre: ${nombre}, edad ${edad}, tiene de actividad favorita ${actividadFavorita} y de preferencia en el deporte ${deporteFavorito}`);

document.write('<br>');

//Ejercicio 2:Realizar un programa que lea cuatro valores numéricos e informar su suma y producto

let num1, num2, num3, num4, suma, producto;
num1 = parseInt(prompt('ingrese el primer numero'));
num2 = parseInt(prompt('ingrese el segundo numero'));
num3 = parseInt(prompt('ingrese el tercero numero'));
num4 = parseInt(prompt('ingrese el cuarto numero'));
suma = num1 + num2 + num3 + num4 ;
producto = num1 * num2 * num3 * num4 ;
document.write(`Usted ingresó los números: ${num1}, ${num2}, ${num3} y ${num4}. La suma de los numeros es ${suma} y el producto de los números es ${producto}`);

document.write('<br>');

//Ejercicio 4- Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad
//que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio
//    sin decimales, es decir un entero: 2, 7, 90 etc.)

let precioArticulo, cantidad, totalAbonar;
precioArticulo = parseInt(prompt('Ingrese el precio del artículo:'));
cantidad = parseInt(prompt('Ingrese la cantidad de artículos que va llevar:'))
totalAbonar = precioArticulo * cantidad ;
document.write(`Usted ingreso ${cantidad} artículos de precio ${precioArticulo} debe abonar un total de:${totalAbonar}`);

document.write('<br>')

// Ejercicio 2- Ingresar dos números
//● Si el primero es mayor que el segundo mostrar en consola la suma de ambos
//● Si el primero es menor que el segundo mostrar en consola la resta del segundo
//menos el primero.
//● Si son iguales mostrar en consola la multiplicación de ambos.
//(ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3)

let numPrimero, numSegundo;
numPrimero = parseInt(prompt('Ingrese su primer número'));
numSegundo = parseInt(prompt('Ingrese su segundo número'));
if (numPrimero > numSegundo) {
    document.write(`Como ${numPrimero} es mayor que ${numSegundo}, la suma de ${numPrimero} y ${numSegundo} es ${numPrimero + numSegundo}`)
} else {
    document.write(`Como ${numPrimero} es mayor que ${numSegundo}, la resta de ${numSegundo} y ${numPrimero} es ${numSegundo - numPrimero}`)
}

document.write('<br>') 

//Ejercicio 5- Ingresar 3 números
//● indicar cual es el mayor
//● indicar cual es el menor
//● obtener la raíz cuadrada del segundo número

let numeroUno, numeroDos, numeroTres;

numeroUno = parseInt(prompt('Ingrese su primer número'));
numeroDos = parseInt(prompt('Ingrese su segundo número'));
numeroTres = parseInt(prompt('Ingrese su tercer número'));


mayor = Math.max(numeroUno, numeroDos, numeroTres);
menor = Math.min(numeroUno, numeroDos, numeroTres);
raizCuadrada = Math.sqrt(numeroDos); 


document.write(`De los números ingresados:${numeroUno}, ${numeroDos}, ${numeroTres},
el mayor número ingresado es: ${mayor}, el menor número ingresado es: ${menor} y
 la raíz cuadrada de ${numeroDos} es: ${raizCuadrada}`);
