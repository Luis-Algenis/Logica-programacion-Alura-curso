let numero = prompt("digiste el codigo, por favor:");

if (numero < 0) {
    console.log(`${numero} es negativo`); 
} else 
    { if (numero > 0) {
        console.log(`${numero} es positivo`); 
        }
        else {
        console.log("cero");
        }
    }