
// Problem 1 : Write a program that takes a command-line argument n and prints a table of the
//             powers of 2 that are less than or equal to 2^n.

function powersOfTwo() {
    const prompt = require('prompt-sync')();
    var number = prompt("Enter the limit : ");
    console.log("Powers of 2 are : ")
    for (i = 0; i <= number; i++) {
        power = Math.pow(2, i);
        console.log(power);
    }
}
powersOfTwo();


// Problem 2 : Write a program that takes a command-line argument n and prints the nth harmonic
//             number. Harmonic Number is of the form

function harmonicForm() {
    const prompt = require('prompt-sync')();
    var number = prompt("Enter the Nth Harmonic Number : ");
    let harmonic = 1.00;
    for (i = 2; i <= number; i++) {
        harmonic += parseFloat(1) / i;
    }
    console.log(harmonic);
}
harmonicForm();


// Problem 3 : Write a program that takes a input and determines if the number is a prime.

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
console.log(checkPrime(5));


// Problem 4 : Extend the program to take a range of number as input and output the Prime Numbers in that range.
function primeNumbersInRange() {
    const prompt = require('prompt-sync')();
    var lowerRange = parseInt(prompt("Enter the lower range : "));
    var upperRange = parseInt(prompt("Enter the upper range : "));
    console.log(`Prime Numbers from range ${lowerRange} to ${upperRange} are : `)
    for (let i = lowerRange; i <= upperRange; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}
primeNumbersInRange();


// Problem 5 : Write a program that computes a factorial of a number taken as input.
//             5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

function factorial(number) {
    factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    console.log(`Factorial of ${number} is : ${factorial}`);
}
const prompt = require('prompt-sync')();
var number = prompt("Enter the number : ");
factorial(number);


// Problem 6 : Write a program to compute Factors of a number N using prime factorization method.
//             Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
//             O/P -> Print the prime factors of number N.

function primeFactors(integer) {
    const primeArray = [];
    for (var i = 2; i < integer / 2; i++) {
        if (integer % i == 0) {
            if (checkPrime(i)) {
                integer /= i;
                primeArray.push(i);
            }
        }
    }

    for (k = 0; k < primeArray.length; k++) {
        console.log(primeArray[k]);
    }
}
var integer = prompt("Enter the number : ");
primeFactors(integer);












