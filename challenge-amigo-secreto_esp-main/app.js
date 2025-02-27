// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Input(id="amigo"), botton(onclick="agregarAmigo()"), ul(id="listaAmigos"), 
ul(id="resultado"), botton(onclick="sortearAmigo()")
*/
let amigoNuevo = [];


function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //console.log(nombreAmigo);
    //document.getElementById("listaAmigos").innerHTML = amigoNuevo;
    if (nombreAmigo == 0) { 
        alert("Por favor, inserte un nombre.");
        return;
       
    } 

    amigoNuevo.push(nombreAmigo);
    console.log(amigoNuevo);
    nombreAmigo = "";
    nombreAmigo.focus();
}

