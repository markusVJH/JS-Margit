const startButton = document.querySelector('#startButton')
const circleButtons = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('#scoreDisplay')
let scoreCount = 0
let active;
let number

const clickCircle = (i) => {
  console.log('circle index:', i)

  scoreCount += 1
  console.log(scoreCount)
  scoreDisplay.textContent = scoreCount
  event.preventDefault()
}
const randomNumber = () => {
  number = Math.floor(Math.random() * circleButtons.length)
}
const startGame = () => {
  console.log('Start button is clicked')
  event.preventDefault()
  randomNumber()
  console.log(number)
  const activeCircle = circleButtons[number]
  activeCircle.classList.add('bg')
}

startButton.addEventListener('click', startGame)

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

