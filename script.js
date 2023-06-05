const mensaje = document.querySelector(".mensaje");
const mensajeEncriptado = document.querySelector(".mensajeEncriptado");
const copia = document.querySelector(".btnCopiar");
copia.style.display = "none"

let diccEncript = {
    'e' : 'enter',
    'i' : 'imes', 
    'a' : 'ai',
    'o' : 'ober',
    'u' : 'ufat'
}

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
    let str = '';

    for(const c of msgOrg){
        if(diccEncript[c])
            str = `${str}${diccEncript[c]}`;
        else
            str = `${str}${c}`;
    }
    return str;
}

function btnDesencriptar(){
    const msgEncrpt = desencriptar(mensaje.value)
    mensajeEncriptado.value = msgEncrpt;
    mensajeEncriptado.style.backgroundImage = "none"
    mensaje.value = "";
    copia.style.display = "block"
}

function desencriptar(str){
    let flag = false;
    let dec = '';

    for (let i = 0; i < str.length; i++) {
        for (const [key, value] of Object.entries(diccEncript)) {
            flag = str.substring(i, i + value.length) === value
            if (flag) {
                i += value.length - 1
                dec = `${dec}${key}`
                break
            }
        }
        if (!flag)
            dec = `${dec}${str[i]}`
    }
    return dec;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensajeEncriptado.value)
    mensaje.value = "";
    alert("Texto Copiado")
}