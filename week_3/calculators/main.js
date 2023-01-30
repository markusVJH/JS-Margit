const calcGasoline = () => {
    const price = Number(document.getElementById('price').value);
    const money = +document.querySelector('#money').value; //this is modern style. Plus is the same as Number
    const answer = document.querySelector('#answer');
   
    let text;

    const amount = Math.floor(money / price);

    if (amount >= 10) {
        text = `You could get about ${amount} liters, good now you can go`;
    } else {
        text = `You could get about ${amount} liters. Sorry you have to stay)`;
    }


    answer.textContent = text;
};

const tempConv = (id) => {
    const celInput = document.getElementById('celsius');
    const fahInput = document.getElementById('fahrenheit');
    const kelInput = document.getElementById('kelvin');

    console.log(id);

    fahInput.value = celInput.value * 1.8 + 32
    celInput.value = (fahInput.value -32) * 0.5556;
};
//change event on input