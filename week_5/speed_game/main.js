const startButton = document.querySelector('#startButton');
const circleButtons = document.querySelectorAll('.circle');

const scoreDisplay = document.querySelector('#scoreDisplay');
let scoreCount = 0;
const startGame = () => {

    /*    console.log('Button is clicked');
       event.preventDefault(); */

    /*    const id = event.target.id;
       if (id === 'circle1') {
           console.log('Button 1 was clicked')
       } else if (id === 'circle2') {
           console.log('Button 2 was clicked')
       } else if (id === 'circle3') {
           console.log('Button 3 was clicked')
       } else if (id === 'circle4') {
           console.log('Button 4 was clicked')
       }
       event.preventDefault() */
    const id = event.target.id;
    console.log(`${id} was clicked`);
    event.preventDefault();
    if (id !== startButton) {
        scoreCount += 1;
        console.log(scoreCount);
        scoreDisplay.textContent = scoreCount;
    }
}





startButton.addEventListener('click', startGame)
for (const circleButton of circleButtons) {
    circleButton.addEventListener('click', startGame);
}