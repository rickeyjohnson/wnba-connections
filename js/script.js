const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        card.classList.toggle("selected")
    })
})