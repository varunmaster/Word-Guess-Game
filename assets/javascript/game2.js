var wordText = document.getElementById("word");
var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var triesLeftText = document.getElementById("triesLeft");
var guessText = document.getElementById("guesses");
var wordList = ["giants", "texans", "ravens", "panthers", "falcons", "bears", "rams", "browns", "packers", "chiefs", "lions"];
var chosenWord = chooseWord();
var chosenWordArr = wordToArr(chosenWord);
var chosenWordBlank = [];
convertWordToDash(chosenWord);
var guessArr = [];
var wins = 0;
var loss = 0;
var triesLeft = 12;

document.onkeyup = function (e) {
    console.log("chosen word: ", chosenWord);
    console.log("chosen word arr:", chosenWordArr);
    console.log("chosen word blank: ", chosenWordBlank);
    var usrPress = e.key;
    console.log("user press: ", usrPress);
    if (chosenWordArr.indexOf(usrPress) !== -1) {
        console.log("guess is right");
        console.log("index of blank word: ", chosenWordArr.indexOf(usrPress));
        chosenWordBlank[chosenWordArr.indexOf(usrPress)] = usrPress;
        console.log("updated blank arr to: ", chosenWordBlank[chosenWordArr.indexOf(usrPress)]);
        triesLeft--;
        console.log("guess left: ", triesLeft);
        guessArr.push(usrPress);
        updateScreen();
    } else {
        triesLeft--;
        guessArr.push(usrPress);
        updateScreen();
    }

    if (isWordComplete(chosenWordBlank)) {
        wins++;
        newGame();
    }

    if(triesLeft <= 0) {
        loss++;
        newGame();
    }
}

function newGame() {
    chosenWord = chooseWord();
    chosenWordArr = wordToArr(chosenWord);
    chosenWordBlank = convertWordToDash(chosenWord);
    triesLeft = 12;
    chosenWordBlank = [];
    updateScreen();
}

function chooseWord() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    return chosenWord;
}

function convertWordToDash(word) {
    for (var i = 0; i < word.length; i++) {
        chosenWordBlank[i] = "_";
    }
    return chosenWordBlank;
}

function wordToArr(word) {
    chosenWordArr = word.split('');
    return chosenWordArr;
}

function isWordComplete(arr) {
    if (arr.indexOf("_") !== -1) {
        return false;
    } else {
        return true;
    }
}

function updateScreen() {
    winText.textContent = wins;
    console.log("updating winText to: ", wins);
    lossText.textContent = loss;
    console.log("updating lossTest to: ", loss);
    triesLeftText.textContent = triesLeft;
    console.log("updating guessText to: ", triesLeft);
    wordText.textContent = chosenWordBlank;
    console.log("updating wordText to: ", chosenWordBlank);
    guessText.textContent = guessArr;
    console.log("guessed letters so far: ", guessArr);
}