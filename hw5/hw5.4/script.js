let isRunning = true;

while (isRunning) {

    const input = prompt("Enter a number to see if its a prime num");
    const num = Number(input);

    if (isNaN(num)) {
        alert("That is not a number");
    } else {
        let isPrime = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            alert("is a prime number");
        } else {
            alert("is not a prime number");
        }
    }

    const loopInput = prompt("Do you want to enter a number again? yes/no");
    if (loopInput === null || loopInput.trim().toUpperCase() !== "YES" && loopInput.trim().toUpperCase() !== "Y") {
        alert("Goodbye!");
        isRunning = false;
    }

}