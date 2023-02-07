const form = document.querySelector('form');

const color1 =document.querySelector('#color1');
const color2 =document.querySelector('#color2');

const directions = document.querySelectorAll('input[name="direction"]');

const text = document.querySelector('#css')

const bgGenerator = () => {
    console.log(directions);

    let dirValue, code;

    for (const item of directions) {
        if (item.checked) {
        dirValue = item.value;
        }
    }
code = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value})`;

document.body.style.backgroundImage = code;
text.textContent = code;



};

form.addEventListener('change', bgGenerator)
