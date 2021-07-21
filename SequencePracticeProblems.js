// Problem 1 : Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.

let a = Math.floor(Math.random() * 10);
console.log("Random number generated is "+a);


// Problem 2 : Use REPL – Use Random to get Dice Number between 1 to 6

let diceNumber = Math.floor(Math.random() * 6 + 1);
console.log("Random Dice Number is : "+diceNumber);


//Problem 3 : Use REPL – Add two Random Dice Number and Print the Result

let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);
let result = dice1 + dice2;
console.log("Dice 1 number : "+dice1+"\nDice 2 number : "+dice2);
console.log("Addition of two dice numbers is : "+result);


//Problem 4 :  Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let sum = 0,average = 0;
console.log("Generating 5 Random Numbers and getting SUM and AVERAGE")
for( i = 1 ; i <= 5; i++){
    let randomNumber = Math.floor(Math.random() * 99 + 10);
    console.log(i+" random number is : "+randomNumber);
    sum += randomNumber;
}
average = sum / 5;
console.log("Sum is : "+sum);
console.log("Average is : "+average);

// Problem 5 : Unit Conversion
// a. 1ft = 12 in then 42 in = ? ft
// b. Rectangular Plot of 60 feet x 40 feet in meters
// c. Calculate area of 25 such plots in acres

//a. Unit Conversion
const prompt = require('prompt-sync')();
var choice = prompt("Press 1 to convert Feet TO Inch \nPress 2 to convert Inch TO Feet\n");
if(choice == 1){
    let valueInFeets = prompt("Enter value in feets : ");
    let valueInInches = valueInFeets * 12;
    console.log("Value in Inches is : "+valueInInches);
} else if (choice == 2) {
    let valueInInches = prompt("Enter value in feets : ");
    let valueInFeets = valueInInches / 12;
    console.log("Value in Feets is : "+valueInFeets);
} else {
    console.log("Invalid Input")
}

// b. Rectangular plot : 
var length = prompt("Enter the lenght in feets : ");
var breadth = prompt("Enter the breadth in feets : ");
let areaOfRectangleInFeets = length * breadth;
let areaOfRectangleInMetres = areaOfRectangleInFeets * 0.3048;
console.log("The Area Of Rectangle Plot of "+length+" X "+breadth+" is : "+areaOfRectangleInMetres);


//c. Area of 25 plots :
let areaInAcres = 25 * areaOfRectangleInMetres * areaOfRectangleInMetres * 0.0002471054;
console.log("Area of 25 plots in Acres : "+areaInAcres);

