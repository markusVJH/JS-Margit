const startButton = document.querySelector('#startButton')
const circleButtons = document.querySelectorAll('.circle')

const scoreDisplay = document.querySelector('#scoreDisplay')
let scoreCount = 0
const startGame = () => {
  console.log('Start button is clicked')
  event.preventDefault()
}

const circleClick = () => {
  const id = event.target.id
  console.log(`${id} was clicked`)
  event.preventDefault()

  scoreCount += 1
  console.log(scoreCount)
  scoreDisplay.textContent = scoreCount
}

let previousRandomNumber = 0

const randomCircle = () => {
  console.log('Start button is clicked')
  event.preventDefault()
  for (let i = 0; i < 5; i++) {
    let highlight = Math.floor(Math.random() * 4) + 1
    console.log(highlight)
  }
}

startButton.addEventListener('click', randomCircle)
for (const circleButton of circleButtons) {
  circleButton.addEventListener('click', circleClick)
}

/* circles.forEach((circle, i) => { teachers way to find out which circle was clicked
    circle.addEventListener('click', () =>
    clickCircle(i));
}); */

/* const clickCircle = (i) => {
  console.log('circle index:', i)
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

