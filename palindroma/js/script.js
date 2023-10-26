// Dati
const userWord = prompt("Inserisci una parola a tuo piacimento");
console.log(userWord);

// Logica
const wordRight = [];
for (let i = 0; i < userWord.length; i++) {
    const element = userWord[i];
    wordRight.push(element)
}
console.log(wordRight);

const wordReverse = [];
for (let i = userWord.length - 1; i >= 0; i--) {
    const elementReverse = userWord[i];
    wordReverse.push(element)
}
console.log(wordReverse);


const result = palindroms(userWord);
alert(result);


function palindroms(wordToInvert) {
    let result = "";

    if (wordRight === wordReverse) {
        result = "La parola inserita è palindroma";
    } else {
        result = "La parola inserita non è palindroma";
    }
    return result;
    
}
console.log(palindroms);