const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')
const circleButtons = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('#scoreDisplay')
const finalScore = document.querySelector('#finalScore')
const overlay = document.querySelector('.overlay')
let scoreCount = 0
let activeCircle
let number
let pace = 1000
circleButtons.disabled = true

let previousNumber
const randomNumber = () => {
  while (number === previousNumber) {
    number = Math.floor(Math.random() * circleButtons.length)
  }
  previousNumber = number
  pace = pace - 30
  circleClicked = false
}
let previousCircle = null

let startGame = (event) => {
  circleButtons.disabled = false
  /* console.log('Start button is clicked') */
  event.preventDefault()
  startButton.classList.add('hide')
  endButton.classList.add('end')
  randomNumber()
  console.log(number)
  const newCircle = circleButtons[number]
  if (previousCircle !== null) {
    previousCircle.classList.remove('bg')
  }
  newCircle.classList.add('bg')
  previousCircle = newCircle
  setTimeout(() => {
    startGame(event)
  }, pace)
}

let circleClicked = false
const clickCircle = (i) => {
  console.log('circle index:', i)
  if (i === number && circleClicked === false) {
    scoreCount += 1
    console.log(scoreCount)
    scoreDisplay.textContent = scoreCount
    circleClicked = true
    event.preventDefault()
  } else {
    endGame()
  }
}
const endGame = () => {
  startGame = false
  event.preventDefault()
  overlay.classList.toggle('visible');
  const modal = document.querySelector('.modal')
  modal.style.display = 'block'
  finalScore.textContent = scoreCount
}
/* startButton.addEventListener('click', startGame) */
startButton.addEventListener('click', (event) => {
  startGame(event)
})

circleButtons.forEach((circle, i) => {
  circle.addEventListener('click', () =>
    clickCircle(i))
})


/* for (const circleButton of circleButtons) {
  circleButton.addEventListener('click', circleClick)
} */


/* notes functions

global vars

score
active currently active number
timer settimeout. global because two use it. Start puts it on. end puts it off.
pace = 1000. everytime new number pace -10. Pace is optional
rounds how many times you miss

separate function for randomnumbers copypaste w3schools random numbers (0,4)

startGame
pickNew to get new highlights (inside of startGame) takes number from random. while (loop) its the same number, look new number
starts startgame all over again


endGame

clickCricle


enableCircles small function. switch circle on off. Everything could be in startGame

resetGame (close button for modal) */

