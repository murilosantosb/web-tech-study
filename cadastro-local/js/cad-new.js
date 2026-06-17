const campo = document.querySelector('#campo');
const salvar = document.querySelector('#salvar');
const mensagem = document.querySelector('#mensagem');

salvar.addEventListener('click', function(event) {
    event.preventDefault();
    const valorCampo = campo.value;

    if (valorCampo.trim() === '') {
        mensagem.innerHTML = '<p class="error">Por favor, preencha o campo antes de salvar.</p>';
    } 

    const chave = `valorSalvo${Date.now()}`;
    localStorage.setItem(chave, valorCampo);

    campo.value = '';

    carregarValoresSalvos()
});