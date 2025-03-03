// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*1 Input(id="amigo"), 2 botton(onclick="agregarAmigo()"), 3 ul(id="listaAmigos"), 
4 botton(onclick="sortearAmigo()"), 5 ul(id="resultado")
*/
var amigoNuevo = [];


function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //console.log(nombreAmigo);
    //tenia === y eso me causo un estanco tremendo en este desafio.
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
    let listaVisible = document.getElementById("listaAmigos");
    //listavisible.innerHTML = amigoNuevo;
    listaVisible.innerHTML = "";
        for (let i = 0; i < amigoNuevo.length; i++) {
            //const lista = amigoNuevo[i];
            let indice = document.createElement('li');
        //let elemento = document.querySelector(indice);
        //elemento.innerHTML = amigoNuevo[i];
            /*textContent es similar a innerHTML, la diferencia esta en que tex.. solo lee texto y excluye las etiquetas,
            miestras que innet.. tambien lo hace pero incluye etiquetas.*/
            indice.textContent = amigoNuevo[i];
            //el metodo appendChild se utiliza para crear Sub-ramas de una etiqueta o elemento.
            listaVisible.appendChild(indice);
        }

}


function sortearAmigo() {
    if (amigoNuevo.length == 0) {
        alert("Debes colocar minimo de dos nombres de amigos en adelante");
    } if (amigoNuevo.length == 1) {
        alert("Debes colocar minimo de dos nombres de amigos en adelante");
    }
    let nombreFlotante = Math.floor(Math.random()*amigoNuevo.length);
    //console.log(nombreFlotante);
    let amigoFlotante = document.querySelector("#resultado");
    amigoFlotante.innerHTML = amigoNuevo[nombreFlotante];
}
