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


function btnEncriptar(){
    if(!validar()){
        const msgEncrpt = encriptar(mensaje.value)
        mensajeEncriptado.value = msgEncrpt;
        mensajeEncriptado.style.backgroundImage = "none"
        mensaje.value = "";
        copia.style.display = "block"
    }
}

function encriptar(msgOrg){
    let diccEncript = {
        'e' : 'enter',
        'i' : 'imes', 
        'a' : 'ai',
        'o' : 'ober',
        'u' : 'ufat'
    }

    let str = '';

    for(const c of msgOrg){
        if(diccEncript[c])
            str = `${str}${diccEncript[c]}`;
        else
            str = `${str}${c}`;
    }
    return str;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensajeEncriptado.value)
    mensaje.value = "";
    alert("Texto Copiado")
}