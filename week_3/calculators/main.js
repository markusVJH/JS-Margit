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


    answer.textContent = text; };
    
    
    const tempConv = (id) => {
        const celInput = document.getElementById('celsius');
        const fahInput = document.getElementById('fahrenheit');
        const kelInput = document.getElementById('kelvin');
    
        if (id === "celsius") {
            fahInput.value = (celInput.value * 9/5) + 32;
            kelInput.value = Number(celInput.value) + 273.15;
        } else if (id === "fahrenheit") {
            celInput.value = (fahInput.value - 32) * 5/9;
            kelInput.value = (fahInput.value - 32) * 5/9 +273.15;
        } else if (id === "kelvin") {
            celInput.value = (kelInput.value - 273.15).toFixed(2);
            fahInput.value = (kelInput.value -273.15) * 9/5 + 32;
        }
        
    };
