let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;

    if (!amigo) {
        alert("Debes ingresar un nombre");
        return;
    }
}