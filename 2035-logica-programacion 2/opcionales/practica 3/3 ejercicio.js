let dolarCambio = 4.80;
let dominicano = 62;

function divisas(valor) {
    let dolares = dolarCambio * valor;
    console.log(`${dolares} dolares`)
return dolares * dominicano;
}

console.log(`${divisas(100)} pesos dominicanos`);
