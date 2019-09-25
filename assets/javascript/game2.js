var wordText = document.getElementById("word");
var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var triesLeftText = document.getElementById("triesLeft");
var guessText = document.getElementById("guesses");
var wordList = ["giants", "eagles", "vikings", "panthers", "falcons", "bears", "rams", "chargers", "patriots", "cowboys", "packers", "chiefs", "saints"];
var chosenWord = chooseWord();
var chosenWordArr = wordToArr(chosenWord);
var chosenWordBlank = [];
var guessArr = [];
var wins = 0;
var loss = 0;
var guessLeft = 12;

console.log("chosen word: ", chosenWord);
console.log("chosen word arr:", chosenWordArr);
console.log("chosen word blank: ",chosenWordBlank);

document.onkeyup = function (e) {
    var usrPress = e.key;
    console.log("user press: ", usrPress);
    if (chosenWordArr.indexOf(usrPress) !== -1) {
        console.log("guess is right");
        console.log("index of blank word: ", chosenWordArr.indexOf(usrPress));
        chosenWordBlank[chosenWordArr.indexOf(usrPress)] = usrPress;
        console.log("updated blank arr to: ",chosenWordBlank[chosenWordArr.indexOf(usrPress)]);
        guessLeft--;
        console.log("guess left: ", guessLeft);
        updateScreen();
    }else {
        guessLeft--;
        guessArr.push(usrPress);
        updateScreen();
    }

    if(isWordComplete){
        wins++;
        newGame();
    }
}

function newGame() {
    chooseWord();
    convertWordToDash();
    guessLeft = 12;
}

function chooseWord() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    return chosenWord;
}

function convertWordToDash(word){
    for(var i = 0; i < word.length; i++){
        chosenWordBlank[i] = _;
    }
    return chosenWordBlank;
}

function wordToArr(word) {
    chosenWordArr = word.split('');
    return chosenWordArr;
}

function isWordComplete(arr) {
    if(arr.indexOf("_") !== -1) {
        return false;
    }else {
        return true;
    }
}

function updateScreen() {
    winText.textContent = wins;
    console.log("updating winText to: ",wins);
    lossText.textContent = loss;
    console.log("updating lossTest to: ",loss);
    guessText.textContent = guessLeft;
    console.log("updating guessText to: ",guessLeft);
    wordText.textContent = chosenWordBlank;
    console.log("updating wordText to: ",chosenWordBlank);
}