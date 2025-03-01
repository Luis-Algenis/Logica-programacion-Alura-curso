// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*1 Input(id="amigo"), 2 botton(onclick="agregarAmigo()"), 3 ul(id="listaAmigos"), 
4 ul(id="resultado"), 5 botton(onclick="sortearAmigo()")
*/
let amigoNuevo = [];


function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //console.log(nombreAmigo);
    if (nombreAmigo == 0) { 
        alert("Por favor, inserte un nombre.");
        return;
        
    } 
      
    amigoNuevo.push(nombreAmigo);
    listaPropuesta();
    document.getElementById("amigo").value = '';
    console.log(amigoNuevo);
}


function listaPropuesta() {
    let listavisible = document.getElementById("listaAmigos");
    //listavisible.innerHTML = amigoNuevo;
    listavisible.innerHTML = "";
        for (let i = 0; i < amigoNuevo.length; i++) {
            //const lista = amigoNuevo[i];
            let indice = document.createElement(li);
            let elemento = document.querySelector(indice);
            elemento.innerHTML = amigoNuevo[i];

            
        }

}


