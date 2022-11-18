const menorValor = 1;
const maiorValor = 1000;
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');
const numeroSecreto = gerarNumeroAleatorio();

elementoMenorValor.innerHTML=menorValor;
elementoMaiorValor.innerHTML=maiorValor;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

