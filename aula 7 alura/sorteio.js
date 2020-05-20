// js aula 7
function ExecutarSorteio() {
    aleatorio = Math.ceil(Math.random() * 10)
    chute = prompt('Seu número da sorte de 0 a 10 é')
    console.log(aleatorio)
    while (chute < 0 || chute > 10) {
        alert('Números inteiros entre 0 e 10! \nTente novamente')
        chute = prompt('Seu número da sorte de 0 a 10 é')
    }
    if (chute == aleatorio) { paragrafoResultado.innerHTML = 'Parabéns! Você ganhou o sorteio!' } else {
        paragrafoResultado.innerHTML = 'Não foi dessa vez :( \nTente novamente!'
        alert("Se quiser ver o último número sorteado, abra em console!")
    }
}