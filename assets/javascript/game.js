var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessLeft = 10;
var guessText = document.getElementById("guesses");
var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var triesLeftText = document.getElementById("triesLeft");
var guessArr = [];
var wins = 0;
var loss = 0;
var compChoice = chooseLetter();

document.onkeyup = function (e) {
    var usrPress = e.key;
    console.log("usr key", usrPress)
    console.log("comp choice", compChoice);

    if (e.key === compChoice) {
        // guessLeft--;
        wins++;
        resetGame();
    }
    guessArr.push(e.key);
    console.log("guess left: ", guessLeft);

    if (guessLeft < 1) {
        loss++;
        resetGame();
        console.log("game lost...resetting")
    }
    guessLeft--;
    // updating what the user sees
    winText.textContent = wins;
    lossText.textContent = loss;
    guessText.textContent = guessArr;
    triesLeftText.textContent = guessLeft;
}

function resetGame() {
    guessArr = [];
    guessLeft = 10;
    triesLeftText.textContent = 9;
    chooseLetter();
}

function chooseLetter() {
    compChoice = null;
    compChoice = alpha[Math.floor(Math.random() * alpha.length)];
    return compChoice;
}