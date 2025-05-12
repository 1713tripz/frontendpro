let birthdate = prompt('Please enter your year of birth');
let city = prompt('Please enter your city');
let sport = prompt('Please enter your favorite sport');


let message = "";


if (birthdate === null || birthdate.trim() === "") {
    message += "Unfortunately, you didnt want to enter your year of birth.\n";
} else {
    message += "Your year of birth is " + birthdate + "\n";
}


if (city === null || city.trim() === "") {
    message += "Unfortunately, you didnt want to enter your year of birth.\n";
} else {
    let cityUpper = city.trim().toUpperCase();

    if (cityUpper === "KIEV" || cityUpper === "KYIV") {
        message += "You live in the capital of Ukraine\n";
    } else if (cityUpper === "WASHINGTON") {
        message += "You live in the capital of USA\n";
    } else if (cityUpper === "LONDON") {
        message += "You live in the capital of UK\n";
    } else {
        message += "You live in" + city + "\n";
    }
}


if (sport === null || sport.trim() === "") {
    message += "Unfortunately, you didnt want to enter your favorite sport\n";
} else {
    let sportUpper = sport.trim().toUpperCase();

    if (sportUpper === "BOXING") {
        message += "Cool! Do you want to be like Oleksandr Usyk?\n";
    } else if (sportUpper === "FOOTBALL") {
        message += "Cool! Do you want to be like Lionel Messi?\n";
    } else if (sportUpper === "BASKETBALL") {
        message += "Cool! Do you want to be like Michael Jordan\n";
    } else {
        message += "Your favorite sport is " + sport;
    }
}


alert(message);