function factorial(n) {
    if (n === 0 || n === 1) {  // El factorial de 0 y 1 es 1
        return 1;
    } else {
        return n * factorial(n - 1);  // Llamada recursiva
    }
}

console.log(factorial(9));