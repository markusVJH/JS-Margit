function numberCal() {
    const num1 = Number(prompt("Enter first number"));
    const num2 = Number(prompt("Enter second number"));
    const num3 = Number(prompt("Enter third number"));

        
    if (num1 >= 0 || num2 >= 0 || num3 >=0) {
        alert("sum is " + (num1 + num2 + num3));
    }
    else if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    alert("sum is" + (num1 + num2 + num3) + ("and multiplication is " + (num1 * num2 * num3)));
   // multi not showing */
    }    
    else if (num1 <= 0 && num2 <= 0 && num3 <= 0) {
    alert("only negatives");
    }
   
}

numberCal();