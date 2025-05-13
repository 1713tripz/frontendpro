let isRunning = true;


while (isRunning) {
    const currency = prompt("Enter the currency to convert to hryvnias(usd, eur)");

    if (currency.trim() === "") {
        alert("You didnt enter the currency");
    } else {
        let currencyUpper = currency.trim().toUpperCase();

        if (currencyUpper === "USD") {
            let message = "Exchange rate: 1 USD = ~41 UAH \n";
            for (let usd = 10; usd <= 100; usd += 10) {
                let uah = usd * 41;
                message += usd + "usd = " + uah + "uah \n";
            }
            alert(message);
        } else if (currencyUpper === "EUR") {
            let message = "Exchange rate: 1 EUR = ~46 UAH \n";
            for (let eur = 10; eur <= 100; eur += 10) {
                let uah = eur * 46;
                message += eur + "eur =" + uah + "uah \n";
            }
            alert(message);
        } else {
            const message = "Unknown currency";
            alert(message);
        }
    }
    const answer = prompt("Do you want convert another currency to hryvnias? yes/n");
    if (answer === null || answer.trim().toUpperCase() !== "YES" && answer.trim().toUpperCase() !== "Y") {
        isRunning = false;
    }
}

