let number

do {
    number = Number.parseInt(prompt("Enter a three-digit number"));

    if (number < 100 || number > 999) {
        alert("You entered wrong. Please enter a three-digit number");
    }
    if (isNaN(number)) {
        alert("Is not a number. Please enter a number");
    }
} while (isNaN(number) || number < 100 || number > 999)
alert("You entered: " + number);

const numberString = number.toString();

const firstNumber = numberString[0];
const secondNumber = numberString[1];
const thirdNumber = numberString[2];

if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    alert("All the numbers are the same");
} else if (firstNumber === secondNumber || secondNumber === thirdNumber || thirdNumber === secondNumber) {
    alert("Two numbers are the same");
} else {
    alert("All the numbers are the different");
}
