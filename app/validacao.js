function verificaNumeroValido(numeroFalado) {
const numero = +numeroFalado;

    if (chuteInvalido(numero)) {
        if (numeroFalado == 'game over') {
            document.body.innerHTML = `
            <h2>Você não quer mais jogar?!</h2>
            <h3>Esperamos que volte logo!</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            fundoGameOver();
        } else {
        elementoChute.innerHTML += '<h4>Valor inválido!</h4><div>Tente novamente</div>';
        }
    }

    if (valorMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
            <h4>Favor falar um número entre ${menorValor} e ${maiorValor}</h4>
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `        
    }
    
}

function valorMaiorOuMenorQuePermitido(numero) {
    return numero < menorValor || numero > maiorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})

function fundoGameOver () {
    document.body.style.backgroundColor = "#E74646";
    document.body.style.color = "#FFE5CA";
}