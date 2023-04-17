let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function selecionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'flex'

    
    let inputMamahuevo = document.getElementById("Mamawuevo")
    let inputBaracaton = document.getElementById("Baracaton")
    let inputSaimon = document.getElementById("Saimon") 
    let spanMascotaJugador = document.getElementById ("jugador")

    if (inputMamahuevo.checked){
        spanMascotaJugador.innerHTML = "Mamawuevo"
    }else if (inputBaracaton.checked){
        spanMascotaJugador.innerHTML = "Baracaton"
    }else if (inputSaimon.checked){
        spanMascotaJugador.innerHTML = "Saimon"
    }else{
        alert("aun no seleccionas tu mascota")
    }

    seleccionarMascotaEnemogo()
}

function seleccionarMascotaEnemogo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("enemigo-enemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Mamawuevo"
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Baracaton"
    }else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Saimon"
    }

}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else if (ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
    }

    combate()

}

function combate(){
    let spanVidasJugador = document.getElementById ("vidas-jugador")
    let spanVidasEnemigo = document.getElementById ("vidas-enemigo")

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()

}

function revisarVidas(){
    if (vidasEnemigo == 0 ){
        crearMensajeFinal("FELICITACIONES, LE PARTISTE SU MADRE AL ENEMIGO C:")
    }else if (vidasJugador == 0){
        crearMensajeFinal("TE GANARON, MANCO :C")
    }
}

function crearMensaje(resultadoCom){
    let sectionMensajes = document.getElementById("resultado")
    let resultadoDelJugador = document.getElementById("ataques-Del-Jugador")
    let resultadoDelEnemigo = document.getElementById("ataques-Del-Enemigo")

    let nuevoAtaqueDelJugador= document.createElement("p")
    let nuevoAtaqueDelEnemigo= document.createElement("p")

    sectionMensajes.innerHTML = resultadoCom
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


    resultadoDelJugador.appendChild(nuevoAtaqueDelJugador)
    resultadoDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarJuego)