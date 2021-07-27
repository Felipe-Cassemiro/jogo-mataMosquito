
function iniciarJogo() {
    let nivel = document.querySelector('#nivel').value

    if (nivel === ""){
        alert('Selecione um nível para entrar no jogo')
        return false
    }

    window.location.href = 'Mata_Mosquito.html?' + nivel
}


const iniciar = document.querySelector('#iniciar').addEventListener('click', iniciarJogo);
