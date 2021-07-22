

// Problem 1 : Help user find degF or degC based on their Conversion Selection. Use
//             Case Statement and ensure that the inputs are within the Freezing Point 
//             (0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
//             a. degF = (degC * 9/5) + 32
//             b. degC = (degF – 32) * 5/9

function temperatureConverter() {
    const prompt = require('prompt-sync')();
    let choice = prompt("Press 1 for degC to degF\nPress 2 for degF to degC\n");
    let degC;
    let degF;
    if (choice == 1) {
        degC = prompt("Enter the temperature in degC : ");
        degF = (degC * 9 / 5) + 32;
        console.log(`Temperature in degF is : ${degF}`);
    } else if (choice == 2) {
        degF = prompt("Enter the temperature in degF : ");
        degC = (degF - 32) * 5 / 9;
        console.log("Temperature in degC : " + degC);
    } else {
        console.log("INVALID INPUT !!!");
    }
}
temperatureConverter();


// Problem 2 : Write a function to check if the two numbers are Palindromes
function palindromeChecker(firstNumber, secondNumber) {
    reverse = 0;
    remainder = 0;
    while (secondNumber > 0) {
        remainder = Math.floor(secondNumber % 10);
        reverse = reverse * 10 + remainder;
        secondNumber = Math.floor(secondNumber / 10);
    }
    if (firstNumber == reverse) {
        return true;
    } else {
        return false;
    }
}
const prompt = require('prompt-sync')();
let firstNumber = parseInt(prompt("Enter the first number : "));
let secondNumber = parseInt(prompt("Enter the second number : "));
console.log(palindromeChecker(firstNumber, secondNumber));


// Problem 3 : Take a number from user and check if the number is a Prime then show
//             that its palindrome is also prime
//             a. Write function check if number is Prime
//             b. Write function to get the Palindrome.
//             c. Check if the Palindrome number is also prime

// checks whether number is prime or not 
function checkPrime(number) {
    if (number <= 1) {
        return false;
    } else {
        for (i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

// gets reverse number 
function getPalindrome(number) {
    reverse = 0;
    remainder = 0;
    temp = number;
    while (number > 0) {
        remainder = Math.floor(number % 10);
        reverse = reverse * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reverse;
}

let number = prompt("Enter the number : ");
if (checkPrime(number)) {
    console.log(`Number ${number} is prime ...`);
} else {
    console.log(`Number ${number} is not prime`);
}
let palindromeNumber = getPalindrome(number);
if (checkPrime(palindromeNumber)) {
    console.log(`Number's Palindrome ${palindromeNumber} is prime ...`);
} else {
    console.log(`Number's Palindrome ${palindromeNumber} is not prime ...`);
}