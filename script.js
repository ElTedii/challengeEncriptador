const mensaje = document.querySelector(".mensaje");
const mensajeEncriptado = document.querySelector(".mensajeEncriptado");
const copia = document.querySelector(".btnCopiar");
copia.style.display = "none"

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}