// FUNÇÕES PARA OS BOTÕES DOS CARDS //

function mostrarBotao(btn, fade){
    btn.style.display = "block"; // mostra o botão
    fade.style.display="block"
}

function esconderBotao(btn, fade){
    btn.style.display = "none"; // esconde o botão
    fade.style.display="none"
}



// FUNÇÃO PARA ABRIR E FECHAR O MODAL 

const button = document.getElementById("funcionamento")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("fechar")

button.onclick = function (){
    modal.showModal()
}

buttonClose.onclick = function (){
    modal.close()
}


// FUNÇÃO PARA O FADE DO MODAL
function mostrarFadeModal(fadeBody){ // dentro dos parênteses utilizei como parâmetro a classe que criei
    fadeBody.style.display="block"
}

function esconderFadeModal(fadeBody){
    fadeBody.style.display="none"
}












