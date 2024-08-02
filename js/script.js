const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        console.log(card.textContent)
    })
})