//2
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafio";
//
let encabezado = document.querySelector('title');
encabezado.innerHTML = "Actividad 1";
//con el document.querySelector elijo la etiqueta de HTML con la que deseo trabajar.
//y con innerHTML puedo colocar algo(lo que sea) en la etiquetas de html.
//evento en programacion: es todo aquello que produce una apcion.
//3
function clicado () {
    console.log("El botón fue clicado");
}
//4
function ciudad () {
    let brasil = prompt("Como es que se llama la ciuda que mas te gustaba de brasil?");
    alert(`Estuve en ${brasil} y me acordé de ti.`);
}
//5
function aprecio () {
    alert("Yo amo JS!");
}

function matematico () {
    let deme = prompt("elija un numero de su preferencia:");
    let numero = prompt("elija otro por favor:");
    let resultado = deme+numero;
    alert(`el resultado es ${resultado}`);
}
//las funciones son utilizadas para separar los codigo js de html, osea para no escribir codigo js en html.