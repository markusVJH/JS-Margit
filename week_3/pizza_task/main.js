
form = document.querySelector('form');

let size = '';
let sizeResult = 0;
let toppingsResult = 0;
let deliveryResult = '';
let homeSelect = 0;
const totalPrice = document.querySelector('#totalPrice');
const selectedSize = document.querySelector('#selectedSize');
const totalToppings = document.querySelector('#totalToppings');
const selectedDel = document.querySelector('#selectedDel');
const displayName = document.querySelector('#displayName');

function summary(id) {
    
let namePrint = document.querySelector('#name').value;
displayName.textContent = (`${namePrint}`);

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


toppingsResult = 0;
const toppingCB = document.querySelectorAll('input[name=topping]:checked');
if (toppingCB.length > 4) {
toppingsResult = (toppingCB.length -4) * 0.5
};


let toppingList = [];
for (let i = 0; i < toppingCB.length; i++) {
    toppingList.push(' ' + toppingCB[i].id);
    console.log(toppingList);
}

homeSelect = 0;
const deliverySelect = document.querySelector('select[name=delivery]')
if (deliverySelect.value === "home") {
homeSelect += 5;
deliveryPrint = 'Delivery home';
}
else if (deliverySelect.value === 'in') {
deliveryPrint = 'Eat in';
}
else if (deliverySelect.value === 'pickup') {
    deliveryPrint = 'Takeout';
}

    
totalPrice.textContent = (`Total price is ${sizeResult + toppingsResult + homeSelect}€`);
selectedSize.textContent = (`Pizza size ${size}`);
totalToppings.textContent = (`Toppings: ${toppingList}`);
selectedDel.textContent = (`${deliveryPrint}`);


}

form.addEventListener('input', function(event) {
    summary(event.target.id);
  });