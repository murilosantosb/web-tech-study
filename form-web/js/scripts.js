let nome = document.querySelector("#nome");
let email = document.querySelector("#email")
let telefone = document.querySelector("#telefone")
let lista = document.querySelector(".lista");
let button = document.querySelector("#btn-cadastro");


button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValueNome = nome.value;
    const inputValueEmail = email.value;
    const inputValueTelefone = telefone.value;

    const templateValue = `<li>
        <strong>${inputValueNome}</strong>
        <p>${inputValueEmail}</p>
        <p>${inputValueTelefone}</p>
    </li>`;

    lista.innerHTML += templateValue;

    nome.value = "";
    email.value = "";
    telefone.value = "";
})