let nome = document.querySelector("#nome");
let lista = document.querySelector(".lista");
let button = document.querySelector("#btn-cadastro");


button.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Você clicou no botão")

    console.log(nome.value)
})