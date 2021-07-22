
// Problem 1 : Write a program that takes a command-line argument n and prints a
//             table of the powers of 2 that are less than or equal to 2^n till 256 is reached..

function powersOfTwo(number) {
    let i = 0;
    let power = 0;
    while (i <= number) {
        power = Math.pow(2, i);
        console.log(power);
        if (power == 256) {
            break;
        }
        i++;
    }
}
const prompt = require('prompt-sync')();
var number = prompt("Enter the number : ");
powersOfTwo(number);


// Problem 2 : Find the Magic Number
//             a. Ask the user to think of a number n between 1 to 100
//             b. Then check with the user if the number is less then n/2 or greater
//             c. Repeat till the Magic Number is reached..

function magicNumber(userNumber) {
    const prompt = require('prompt-sync')();
    let guessNumber = parseInt(prompt("Guess the number : "));
    flag = true;
    while (flag) {
        if (guessNumber == userNumber) {
            console.log("Right Guess !!!");
            flag = false;
        } else if (guessNumber < userNumber) {
            console.log("Guess Number is less than User Number");
            magicNumber(userNumber);
        } else if (guessNumber > userNumber) {
            console.log("Guess Number is greater than User Number");
            magicNumber(userNumber);
        }
    }
}
let userNumber = Math.floor(Math.random() * 99 + 1);
console.log(userNumber);
magicNumber(userNumber);


// Problem 3 : Extend the Flip Coin problem till either Heads or Tails wins 11 times.

function flipCoin() {
    let i = 1;
    while (i <= 11) {
        let coinResult = Math.floor(Math.random() * 2);
        if (coinResult == 1) {
            console.log(i + ": HEADS");
        } else {
            console.log(i + ": TAILS");
        }
        i++;
    }
}
flipCoin();


// Problem 4 : Write a Program where a gambler starts with Rs 100 and places Re 1 bet
//             until he/she goes broke i.e. no more money to gamble or reaches the
//             goal of Rs 200. Keeps track of number of times won and number of bets made.

/**
 * Purpose : Here gambling result is random by using random function 
 *           intial balance is 100 ,Player stops if balance reaches 
 *           200 or is 0.It also count number of times won and lose the game
 */
function gamblerProblem() {
    let balance = 100;
    let BET = 10;
    let winCount = 0;
    let loseCount = 0;
    let flag = true;
    while (flag) {
        let gameResult = Math.floor(Math.random() * 2);
        if (gameResult == 1) {
            balance = balance + BET;
            winCount++;
        } else if (gameResult == 0) {
            balance = balance - BET;
            loseCount++;
        }
        if (balance == 0 || balance == 200) {
            flag = false;
        }
    }
    console.log("Balance    : " + balance);
    console.log("Total Won  : " + winCount);
    console.log("Total Lose : " + loseCount);
}
gamblerProblem();


