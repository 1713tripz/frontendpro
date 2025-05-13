let isRunning = true;

while (isRunning) {
    const input = prompt("Enter some number:");
    const num = Number(input)

    if (isNaN(num)) {
        alert("That is not a number");
    } else {
        let stopLoop = true;

        for (let i = 1; i <= 100; i++) {
            let result = i ** 2;
            if (result <= num) {
                stopLoop = false;
                console.log(result);
            }
        }
        alert("You have result in console!");
        if (stopLoop) {
            isRunning = false;
        }
    }
    let answer = prompt("Do you want continue? yes/n");
    if (answer === null || answer.trim().toUpperCase() !== "YES" && answer.trim().toUpperCase() !== "Y") {
        isRunning = false;
    }
}