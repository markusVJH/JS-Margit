
form = document.querySelector('form');
let total = 0;
let size = '';
const totalPrice = document.querySelector('#totalPrice');
const selectedSize = document.querySelector('#selectedSize');

function summary(id) {
    
/* switch (id) {
    case "size2":
    total =  total + 7.5;
    break;
    case "size4":
    total = total + 10.5;
    break;
    case "size6":
    total = total + 12.5;
    break;
    case "size8":
    total = total + 15.5
    break;
    default: 
    console.log('default');
} */

   if (id === "size2") {
    total = total+7.5;
    size = size + "2";
} else if (id === "size4") {
    total = total+10.5;
    size = size + "4";
} else if (id === "size6"){
    total = total+12.5;
    size = size + '6';
} else if (id === "size8") {
    total = total+15.5;
    size = size + '8';
}

const toppingCB = document.querySelectorAll('input[name=topping]:checked');
const toppingsAmount = toppingCB.length;
if (toppingsAmount > 4) {
    total = total + 0.5;
}

totalPrice.textContent = (`Total price is ${total}`);
selectedSize.textContent = (`Pizza size ${size}`);
}

form.addEventListener('change', function(event) {
    summary(event.target.id);
  });

//event listener on change whole form