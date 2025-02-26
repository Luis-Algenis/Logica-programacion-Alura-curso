
let listaGenerica = [];
//para agregar elemento a mi arreglo debo de anadir lo siguiente: arreglo.push[elemento a arregar].

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']

function muestra() {
    console.log(lenguagesDeProgramacion);
}
// Para ver la cantidad de elemento en el arreglo debo de introducir: arreglo.length a el arreglo. 
// y para ver el ultimo elemento debo de anadir lo siguiente: arreglo[arreglo.length-1].
muestra();

function reverso() {
    console.log(lenguagesDeProgramacion.reverse());
    // agregar llaves [ y dentro posicion del elemento iniciando desde el 0] esto para mostrar un elemento especifico dentro del arreglo.
}

reverso();

listaGenerica.push(2, 5, 9, 24, 16, 15);
console.log(listaGenerica);
function promedio() {
    let suma = listaGenerica.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return Math.floor(suma/listaGenerica.length); 
}

console.log(promedio());

function maximoMinimo() {
    let mayor = Math.max(...listaGenerica);
    let menor = Math.min(...listaGenerica);
    console.log(mayor);
    console.log(menor);
}

maximoMinimo();

function totalSumaElementos() {
    return listaGenerica.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(totalSumaElementos());