var button = document.querySelector("button");
var phraseLetters = new Array();
var phraseLine = new Array();
var phraseDisplay = document.querySelector("#phraseDisplay");
var letterGuess = document.querySelector("input");
var phrase = 0;
var tip = 0;
var clue = document.querySelector("#clue");
// eslint-disable-next-line no-unused-vars
var gameContinue = false;
var result = document.querySelector("#result");
var lettersGuessedSet = new Array();
var lettersGuessed = document.querySelector("#lettersGuessed");
var wrong = 0;
var wrongText = document.querySelector("#wrongText");

button.addEventListener("click", function () {
  result.textContent = "";
  phraseLetters = [];
  phraseLine = [];
  lettersGuessedSet = [];
  wrong = 0;
  wrongText.textContent = "Wrong: " + wrong;
  phrase = prompt("Write your HANGMAN phrase.");
  tip = prompt("Provide a clue.");
  clue.textContent = "Clue: " + tip;
  this.textContent = "End Game";
  for (var i = 0; i < phrase.length; i++) {
    phraseLetters.push(phrase.charAt(i));
    if (phraseLetters[i] == " ") {
      phraseLine.push(" ");
    } else {
      phraseLine.push("_");
    }
    phraseDisplay.textContent = phraseLine.join("");
    console.log(phraseDisplay.textContent);
  }
});

letterGuess.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    if (
      !phraseLetters.includes(letterGuess.value.toLowerCase()) &&
      !phraseLetters.includes(letterGuess.value.toUpperCase()) &&
      !lettersGuessedSet.includes(letterGuess.value.toLowerCase()) &&
      !lettersGuessedSet.includes(letterGuess.value.toUpperCase())
    ) {
      wrong++;
      wrongText.textContent = "Wrong: " + wrong;
    }

    if (
      !lettersGuessedSet.includes(letterGuess.value.toUpperCase()) &&
      !lettersGuessedSet.includes(letterGuess.value.toLowerCase())
    ) {
      lettersGuessedSet.push(letterGuess.value);
    }
    lettersGuessed.textContent = "Guessed: " + lettersGuessedSet.join(" ");
    for (var i = 0; i < phraseLine.length; i++) {
      if (letterGuess.value.toLowerCase() == phraseLetters[i].toLowerCase()) {
        phraseLine[i] = phraseLetters[i];
      }
    }

    phraseDisplay.textContent = phraseLine.join("");

    letterGuess.value = "";

    if (wrong == 6) {
      gameContinue = false;
      result.textContent = "Game Over. You Lose!!!";
      button.textContent = "Start Game";
      phraseLetters = [];
      phraseLine = [];
      lettersGuessedSet = [];
      wrong = 0;
      wrongText.textContent = "Wrong: " + wrong;
      phraseDisplay.textContent("");
    }

    for (var j = 0; j < phraseLine.length; j++) {
      if (phraseLine.includes("_")) {
        gameContinue = true;
      } else {
        gameContinue = false;
        result.textContent = "You Won!!!";
        button.textContent = "Start Game";
        phraseLetters = [];
        phraseLine = [];
        lettersGuessedSet = [];
        wrong = 0;
        wrongText.textContent = "Wrong: " + wrong;
      }
    }
  }
});
