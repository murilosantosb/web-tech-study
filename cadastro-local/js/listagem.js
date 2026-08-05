const listarValores = document.querySelector("#listaValores");

carregarValoresSalvos()

function carregarValoresSalvos() {
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('valorSalvo')) {
            const valor = localStorage.getItem(chave);
            const listItem = document.createElement("li");
            listItem.textContent = valor;
            listarValores.appendChild(listItem);
        }
    }
}