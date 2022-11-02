const submitBtn = document.querySelector('.submit')
const input = document.querySelector('.inp')
const textarea = document.querySelector('h3')
const randomBtn = document.querySelector('.random')

submitBtn.addEventListener('click', getFact)

function getFact() {
    const number = input.value
    fetch(`http://numbersapi.com/${number}`)
        .then(response => response.text())
        .then(data => {
            textarea.innerText = data
        })
}

randomBtn.addEventListener('click', getRandomFact)

function getRandomFact() {
    fetch('http://numbersapi.com/random')
        .then(response => response.text())
        .then(data => {
            textarea.innerText = data
        })
}

