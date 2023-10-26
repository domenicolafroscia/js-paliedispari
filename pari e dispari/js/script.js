// Dati
const userOddEven = prompt("Pari o dispari?");
const userNumber = parseInt(prompt("Scrivi un numero da 1 a 5"));
console.log(userNumber, userOddEven);

const pcNumber = generateRndNumber(1, 5);
console.log(pcNumber);

function generateRndNumber(min, max) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    return rndNumber;
}

const sum = `${pcNumber + userNumber}`;
console.log(sum);
const result = oddEven(sum);
console.log(result);

// Logica
function oddEven (NumberToTest) {
    let result = "";
    if (NumberToTest % 2 === 0) {
        result = "even";
    } else {
        result = "odd";
    }
    return result;
}

let message = 0;

if (userNumber == "even" && sum === "even") {
    message = "Hai vinto"
} else if (userNumber === "odd" && sum === "odd") {
    message = "Hai vinto"
} else {
    message = "Ha vinto il PC e tu hai perso"
}

console.log(message);