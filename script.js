const mensaje = document.querySelector(".mensaje");
const mensajeEncriptado = document.querySelector(".mensajeEncriptado");
const copia = document.querySelector(".btnCopiar");
copia.style.display = "none"

function validar(){
    let mensaje = document.querySelector(".mensaje").value;
    let validador = mensaje.match(/^[a-z]*$/)

    if(!validador || validador === 0) {
        alert("Solo se permiten letras minúsculas y sin acento");
        location.reload();
        return true;
    }
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}