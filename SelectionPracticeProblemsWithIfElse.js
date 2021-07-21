
//Problem 1 : Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

function minMaxOfRandomValues() {
    const arrayOfRandomNumbers = [];
    for (i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 899 + 100);
        arrayOfRandomNumbers[i] = randomNumber;
    }
    console.log("Five Randome Numbers are : \n" + arrayOfRandomNumbers);
    let minimum = arrayOfRandomNumbers[0];
    let maximum = arrayOfRandomNumbers[0];
    for (i = 0; i < arrayOfRandomNumbers.length; i++) {
        if (maximum < arrayOfRandomNumbers[i]) {
            maximum = arrayOfRandomNumbers[i];
        }
        if (minimum > arrayOfRandomNumbers[i]) {
            minimum = arrayOfRandomNumbers[i];
        }
    }
    console.log("Minimum Value is : " + minimum);
    console.log("Maximum Value is : " + maximum);
}
minMaxOfRandomValues();


//Problem 2 : Write a program that takes day and month from the command line and prints true if day
//            of month is between March 20 and June 20, false otherwise.

function checkDate() {
    const prompt = require('prompt-sync')();
    let date = prompt("Enter the date : ");
    let month = prompt("Enter the month number : ");
    console.log(month + " " + date);
    if (month == 6 && date < 21) {
        console.log("True");
    } else if (month == 3 && date >= 20 && date <= 31) {
        console.log("True");
    } else if (month == 4 && date >= 1 && date <= 30) {
        console.log('True');
    } else if (month == 5 && date >= 1 && date <= 31) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkDate();

//Problem 3 : Write a program that takes a year as input and outputs the Year is a Leap Year or not
//            a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
//            divisible by 400.

function checkLeapYear(){
    const prompt = require('prompt-sync')();
    let year  = prompt("Enter the Year : ")
    if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log("True");
    } else {
        console.log("False");
    }
}
checkLeapYear();


// Problem 4 : Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

function flipCoin(){
    let coinResult = Math.floor(Math.random() * 2);
    if(coinResult == 1){
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
flipCoin();