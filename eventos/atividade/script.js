// Pega os elementos da página pelo id
const botao = document.querySelector("#btnMudar")
const imagem = document.querySelector("#imagem")
const descricao = document.querySelector("#descricao")
const card = document.querySelector(".card")

let visualAlternativo = false

botao.addEventListener("click", function() {
    if (visualAlternativo == false) {
        descricao.textContent = "Ser corinthiano é ir além de ser apenas um torcedor; é viver um estado de espírito que ninguém mais consegue entender."
        imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVf4LFjAezouin9O3QO6tUUr2D3SSoWKJQn2_Fh99c3hExN0fZ1IMaMWY&s=10"
        imagem.alt = "Torcida do Corinthians"
        card.style.backgroundColor = "#A30000"
        visualAlternativo = true
    } else {
        descricao.textContent = "O Corinthians foi fundado em 1910 e é conhecido como \"O Time do Povo\". É um dos clubes mais populares do Brasil, com uma torcida enorme e apaixonada!"
        imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FzK_kHv4ff81oITf74uRwvYv9YxUOv2SxHZHgZod4hQrwSmos2xDoyo&s=10"
        imagem.alt = "Escudo do Corinthians"
        card.style.backgroundColor = "#000000"
        visualAlternativo = false
    }
})
