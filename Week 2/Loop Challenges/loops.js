/* Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…) */

for (i = 1; i < 100; i += 2) { //i = index
 console.log(i)
}

/* Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2, 98, 4, 96, 6, 94 … Print result in one line. */

let result = " ";
for (let i = 2; i <= 98; i += 2) {
    result += i + ", " + (100 - i) + ", ";
}
console.log(result);

/* margit answer: */
let answer = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
    answer += ' ' + i + ' ';
    answer += ' ' +  end + ' ';
    end -= 2;
}

console.log(answer);

/* Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.) */
let distance, time; //declare outside like this!!

do {
    distance = Number(prompt("What is the distance in km?"));
    time = Number(prompt("What is the time in hours?"));

    console.log("The speed is " + (distance / time) + "km/hour");
} while(distance != 0);

/* Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even. */

let howMany = 0;

for (let i = 1; i <= 5; i++) {
    let number = Number(prompt("Write a number:"));
    if (number % 2 === 0) {
        howMany++;
    }
}

console.log(howMany + " numbers were even!");

/* Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers. */

let sum = 0;
let count = 0;

while(true) {
    let number = Number(prompt("Please enter any number! Enter '0' to end."))
    if (number === 0) {
        break;
    }
    sum += Number(number);
    count++;
}
let average = sum / count;
console.log("the average your numbers is " + average);

/* Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers. */
let sum2 = 0;

for (let i = 0; i < 25; i++) {
    let number = Number(prompt("Please enter a number! " + (24-i) + " more after this one."));
    sum2 += number;
}
let average2 = sum2/25;
console.log("The average of your numbers is " + average2 + ".");
/* Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers. */

let sum3 = 0;
let count2 = 0;

while(true) {
    let number3 = Number(prompt("Enter a number!"));
    let question = confirm("Do you want to enter another number? :)))");
    if (question === false) {
        break; 
    }
    sum3 += Number(number3);
    count2++;
    
}
let average3 = sum3 / count2;
console.log("The average of the numbers is " + average3 + '.');

/* Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave. */
let smallest = 0;
let number4 = 0;
let howMany2 = Number(prompt("How many numbers do you want to enter?"))

for(i = 0; i < howMany2; i++) {
    number4 = Number(prompt("Enter a number"));
}

console.log('The smallest number you gave is' + smallest + '.')

console.log('something');
console.log('something');
/* Make a program that asks ten numbers and in the end prints out two biggest numbers. */


/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */