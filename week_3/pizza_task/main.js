
form = document.querySelector('form');
/* const sizeInput = document.querySelector('input[input=radio]'); */
let total = 0;
let size = '';
let sizeResult;
let toppingsResult;
let deliveryResult;
const totalPrice = document.querySelector('#totalPrice');
const selectedSize = document.querySelector('#selectedSize');

function summary(id) {

   if (id === "size2") {
    sizeResult = 7.5;
    size = "2";
} else if (id === "size4") {
    sizeResult = 10.5;
    size = "4";
} else if (id === "size6"){
    sizeResult = 12.5;
    size = '6';
} else if (id === "size8") {
    sizeResult = 15.5;
   size = '8';
}

const toppingCB = document.querySelectorAll('input[name=topping]:checked'); //boolean if checked or not
const toppingsAmount = toppingCB.length;
if (toppingsAmount > 4) {
    /* total = total + 0.5; */
    toppingsResult += 0.5;
}

totalPrice.textContent = (`Total price is (${sizeResult} + ${toppingsResult})`); //fix this :(
selectedSize.textContent = (`Pizza size ${size}`);
}

form.addEventListener('input', function(event) {
    summary(event.target.id);
  });

//event listener on change whole form

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
