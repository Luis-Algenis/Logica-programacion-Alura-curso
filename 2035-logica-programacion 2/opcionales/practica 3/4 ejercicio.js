let perimetro;
let area;

function areaSala(altura, anchura) {
    perimetro = 2 * (altura + anchura);
    console.log(`El perimetro es ${perimetro} m`);
    area = altura * anchura;
    console.log(`y el area es ${area} m2 `);
}

areaSala(3.5, 5.2);