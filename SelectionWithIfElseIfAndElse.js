
// Problem 1 : Read a single digit number and write the number in word

function readingNumber() {
    const prompt = require('prompt-sync')();
    let number = prompt("Enter the single digit number : ");
    if (number == 1) {
        console.log("ONE");
    } else if (number == 2) {
        console.log("TWO");
    } else if (number == 3) {
        console.log("THREE");
    } else if (number == 4) {
        console.log("FOUR");
    } else if (number == 5) {
        console.log("FIVE");
    } else if (number == 6) {
        console.log("SIX");
    } else if (number == 7) {
        console.log("SEVEN");
    } else if (number == 8) {
        console.log("EIGHT");
    } else if (number == 9) {
        console.log("NINE");
    } else {
        console.log("INVALID INPUT !!!");
    }
}
readingNumber();


// Problem 2 : Read a Number and Display the week day (Sunday, Monday,...)

function readWeekDay() {
    const prompt = require('prompt-sync')();
    let number = prompt("Enter the number for week day : ");
    if (number == 1) {
        console.log("SUNDAY");
    } else if (number == 2) {
        console.log("MONDAY");
    } else if (number == 3) {
        console.log("TUESDAY");
    } else if (number == 4) {
        console.log("WEDNESDAY");
    } else if (number == 5) {
        console.log("THURSDAY");
    } else if (number == 6) {
        console.log("FRIDAY");
    } else if (number == 7) {
        console.log("SATURDAY");
    } else {
        console.log("INVALID INPUT !!!");
    }
}
readWeekDay();

// Problem 3 : Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function displayDecimalPlace(){
    const prompt = require('prompt-sync')();
    let number = prompt("Enter the number : ");
    if (number < 10000){
        units = number % 10;
        tens = Math.floor(number / 10 ) % 10;
        hundreds = Math.floor(number / 100 ) % 10;
        thousands = Math.floor(number / 1000);
        console.log("Units Place     : "+units);
        console.log("Tens Place      : "+tens);
        console.log("Hundreds Place  : "+hundreds);
        console.log("Thousands Place : "+thousands);
    } else {
        console.log("Invalid Input")
    }
}
displayDecimalPlace();

// Problem 4 : Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
//             1. a + b * c     3. c + a / b
//             2. a % b + c     4. a * b + c

function arithmeticOperations(){
    const prompt = require('prompt-sync')();
    let a = prompt("Enter the value of a : ");
    let b = prompt("Enter the value of b : ");
    let c = prompt("Enter the value of c : ");
    result1 = a + b * c;
    result2 = a % b + c;
    result3 = c + a / b;
    result4 = a * b + c;
    const arrayOfResults = [result1,result2,result3,result4];
    console.log("Four Arithmetic Results are : "+arrayOfResults);
    let minimum = arrayOfResults[0];
    let maximum = arrayOfResults[0];
    for(i = 0; i < arrayOfResults.length; i++){
        if(maximum < arrayOfResults[i]){
            maximum = arrayOfResults[i];
        }
        if(minimum > arrayOfResults[i]){
            minimum = arrayOfResults[i];
        }
    }
    console.log("Minimum : "+minimum);
    console.log("Maximum : "+maximum);
}
arithmeticOperations();