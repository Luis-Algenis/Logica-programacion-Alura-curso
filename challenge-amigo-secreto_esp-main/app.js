// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Input(id="amigo"), botton(onclick="agregarAmigo()"), ul(id="listaAmigos"), 
ul(id="resultado"), botton(onclick="sortearAmigo()")
*/
let amigoNuevo = [];


function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    amigoNuevo.push(nuevoAmigo);
    document.getElementById("listaAmigos").innerHTML = amigoNuevo;
}
console.log(amigoNuevo);

