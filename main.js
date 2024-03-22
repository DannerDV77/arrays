/* 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. 
Mostrar en consola el resultado del array. */

function ejercicio1 (){
    const numeros = [345,5343,21,4763,5624,124,654,652,987,324]
    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i])
    }
}

ejercicio1()

/* El usuario deberá ingresar un string con varias palabras separadas por coma en un 
popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se 
convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado */

function ejercicio2 (){
    const a1 = prompt("ingresa palabras separadas por comas")
    const a2 = a1.trim()
    const palabras = [a2]
    for(let i = 0; i < palabras.length; i++){
        console.log(palabras[i])
    }
}

ejercicio2()

/* De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y 
el número mayor.*/

function ejercicio3(){
    let numeros = [3, 8, 2, 5, 10];
    numeros.sort((a, b) => a - b);
    console.log("Números ordenados de menor a mayor:", numeros);
}

ejercicio3()