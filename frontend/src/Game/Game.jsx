import categories from "./Categories"

let answers = []

function gatherCategoryAnswers(categories, answers) {
    categories.forEach((category) => {
        let tempArr = category.answers

        tempArr.forEach((player) => {
            answers.push({
                player: player,
                category: category.name
            })
        })
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function submit() {
    // code
}

gatherCategoryAnswers(categories, answers)
shuffle(answers)
console.log(answers)

export { answers, shuffle, submit }