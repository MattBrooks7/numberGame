// const correctAnswer = randomNumber1and100()
const correctAnswer = 12

const button = document.querySelector('button')
const input = document.querySelector('#userInput')
const messages = document.querySelector('#messages')

button.addEventListener('click', () => {
    console.log('here is the input', input.value)
    let guess = input.value
    console.log(guess)

    if (guess == correctAnswer) {
        const newPTag = document.createElement('p')
        newPTag.innerText = "you won!"
        messages.appendChild(newPTag)
        button.disabled = true
    }
     else {
        const isGuessBigger = guess > correctAnswer

        if (isGuessBigger) {
            const newPTag = document.createElement('p')
            newPTag.innerText = guess = "you guessed too high, pick a number less than"
            messages.appendChild(newPTag)
        } else {
            const newPTag = document.createElement('p')
            newPTag.innerText = "you guessed too low, pick a number greater than"
            messages.appendChild(newPTag)
        }
    }
    }
)

// let guess = prompt("Guess a number between 1 and 100")
// while (!haveWeWonYet){






function randomNumber1and100() {
    return Math.floor(Math.random() * 100) + 1
}