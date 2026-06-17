const apagarBtn = document.querySelector("#apagar")

apagarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    alert("Dados foram limpos.")
})