function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML +='<div>Valor inválido</div>';
        return
    }

    if (verificaLimites(numero)) {
        elementoChute.innerHTML +=`<div> O numero precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}<h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }else {
        elementoChute.innerHTML += `
            <div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    }
}

function chuteForInvalido(valor) {
    return Number.isNaN(valor)
}

function verificaLimites(valor) {
    return valor < menorValor || valor > maiorValor
}

document.body.addEventListener('click', e=> {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})