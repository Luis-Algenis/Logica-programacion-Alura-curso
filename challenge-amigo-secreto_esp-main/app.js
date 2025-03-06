// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var amigoNuevo = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //tenia === y eso me causo un estanco tremendo en este desafio.
    if (nombreAmigo == 0) { 
        alert("Por favor, inserte un nombre.");
        return;
        
    } 

    amigoNuevo.push(nombreAmigo);
    listaPropuesta();
    document.getElementById("amigo").value = '';
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
    let amigoFlotante = document.querySelector("#resultado");
    amigoFlotante.innerHTML = `El amigo secreto era: ${amigoNuevo[nombreFlotante]}`;

    let borrar = document.querySelector('#listaAmigos');
    borrar.innerHTML = "";
}
