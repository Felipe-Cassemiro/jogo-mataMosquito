//adequar a tela do jogo para o mosquito não aparecer fora dela
window.addEventListener("resize", ajusteTelaJogo);

let largura = 0
let altura = 0
let vidas = 1
let tempo = 20

let criaMosquitoTempo = 1000

//atribuindo o nível
let nivel = window.location.search.replace('?', '')

if (nivel === 'facil') {
    criaMosquitoTempo = 1500
} else if (nivel === 'normal') {
    criaMosquitoTempo = 1000
} else {
    criaMosquitoTempo = 750
}



//formação do cronometro
let cronometro = setInterval(function () {

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(limpaMosquito)
        window.location.href = 'victory.html'
    } else {
        document.querySelector('#cronometro').innerHTML = tempo
    }
    
    tempo -= 1

}, 1000)


function ajusteTelaJogo () {
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(altura, largura)
}

ajusteTelaJogo()

//criando posição randomica em que o mosquito vai aparecer

function positionRandom() {

//remover o mosquito existente
    if (document.querySelector('#mosquito')){
        document.querySelector('#mosquito').remove()
        
        if (vidas > 3) {
            window.location.href = 'gameover.html'
        }
        else {
            document.querySelector('#v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    } 


//posicoes randomicas
    let positionX = Math.floor(Math.random() * largura) -90
    let positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

//criando elementos html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}


//tamanho randomico do mosquito

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
}

//mudar lado do olhar

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    if (classe === 0){
        return 'ladoA'
    } else {
        return 'ladoB'
    }
}

//

let limpaMosquito = setInterval(function(){
    positionRandom()
}, criaMosquitoTempo)




