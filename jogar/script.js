function escolha(esc) {
    let escolha = document.getElementById(`${esc}`)
    let escolhaTexto = document.getElementById('escolhaTexto')
    let fraseEscolha = document.getElementById('escolha')
    escolhaTexto.innerHTML = "Você escolheu: "
    escolha.classList.toggle('escolhido')
    fraseEscolha.classList.remove('escondido')
    escolhaTexto.innerHTML += `${esc.toUpperCase()}!`
}