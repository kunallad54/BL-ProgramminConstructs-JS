
// Problem 1 : Read a single digit number and write the number in word using Case

function readingNumber(){
    const prompt = require('prompt-sync')();
    let number  = prompt("Enter the number : ");
    switch (number) {
        case "1":
            console.log("ONE");
            break;
        case "2":
            console.log("TWO");
            break;
        case "3":
            console.log("THREE");
            break;
        case "4":
            console.log("FOUR");
            break;
        case "5":
            console.log("FIVE");
            break;
        case "6":
            console.log("SIX");
            break;
        case "7":
            console.log("SEVEN");
            break;
        case "8":
            console.log("EIGHT");
            break;
        case "9" :
            console.log("NINE");
            break;    
        default:
            console.log("Invalid Input !!!")
            break;
    }
}
readingNumber();

function readWeekDay(){
    const  prompt = require('prompt-sync')();
    let day = prompt("Enter number for week day : ");
    switch (day) {
        case '1':
            console.log("SUNDAY");
            break;
        case "2":
            console.log("MONDAY");
            break;
        case "3":
            console.log("TUESDAY");
            break;
        case "4":
            console.log("WEDNESDAY");
            break;
        case "5":
            console.log("THURSDAY");
            break;
        case "6":
            console.log("FRIDAY");
            break;
        case "7":
            console.log("SATURDAY");
            break;
        default:
            console.log("INVALID INPUT !!!")
            break;
    }
}
readWeekDay();

// Problem 4 : Write a program that takes User Inputs and does Unit Conversion of
//             different Length units
//             1. Feet to Inch      3. Inch to Feet
//             2. Feet to Meter     4. Meter to Feet

function unitConversion(){
    const prompt = require('prompt-sync')();
    let choice = prompt("Press 1 for Feet to Inch\nPress 2 for Inch to Feet\nPress 3 for Feet to Meter\nPress 4 for Meter to Feet\n");
    switch (choice) {
        case "1":
            let valueInFeets = prompt("Enter value in feets : ");
            let valueInInches = valueInFeets * 12;
            console.log("Value in Inches is : "+valueInInches);
            break;
        case "2":
            let value2 = prompt("Enter value in feets : ");
            value3 = value2 / 12;
            console.log("Value in Feets is : "+value3);
            break;
        case "3":
            let value1 = prompt("Enter value in feets : ");
            let valueinMeters = value1 * 0.3048;
            console.log("Value in Meters : "+valueinMeters);
            break;
        case "4":
            let value4 = prompt("Enter value in meters : ");
            let value = value4 * 3.280;
            console.log("Value in Feets : "+value);
            break;    
        default:
            console.log("Invalid Input !!!");
            break;
    }
}
unitConversion();