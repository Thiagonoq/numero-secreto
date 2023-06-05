const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    
    const numeroFalado = e.results[0][0].transcript;
    exibeNumeroNaTela(numeroFalado);

    verificaNumeroValido(numeroFalado);

}

function exibeNumeroNaTela(numeroFalado) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${numeroFalado}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());