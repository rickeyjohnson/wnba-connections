const cards = document.querySelectorAll(".card")
const deselectButton = document.querySelector("#deselect")

cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        card.classList.toggle("selected")
    })
})

deselectButton.addEventListener("click", (event) => {
    console.log('deselect btn works!')
})