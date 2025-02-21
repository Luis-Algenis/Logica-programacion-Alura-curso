let radio = 5;
let potencia = 2;

function areaSala(pi) {
    let perimetro = potencia * pi * radio;
    console.log(`El perimetro es ${perimetro} m`);
   let area = pi * radio ** potencia;
    console.log(`y el area es ${area} m2 `);
}

areaSala(3.14);