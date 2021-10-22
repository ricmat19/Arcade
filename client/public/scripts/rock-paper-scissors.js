var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var randomHandPicked = document.querySelector("#random-hand-picked");
var result = document.querySelector("#result");
var randomHand = 0;
var win = 0;
var lose = 0;
var tie = 0;
var startButton = document.querySelector("#startButton");
var start = true;

startButton.addEventListener("click", function () {
  if (start) {
    this.textContent = "End Game";
    start = false;
  } else {
    this.textContent = "Start Game";
    start = true;
    alert("Wins: " + win + " | Losses: " + lose + " | Ties: " + tie);
    win = 0;
    lose = 0;
    tie = 0;
  }
});

rock.addEventListener("click", function () {
  startButton.textContent = "End Game";
  start = false;
  randomHandOutput();
  if (randomHand === 0) {
    result.textContent = "It's a Tie!";
    tie += 1;
  } else if (randomHand === 1) {
    result.textContent = "Paper beats Rock. You Lose!";
    lose += 1;
  } else {
    result.textContent = "Rock beats Scissors. You Win!";
    win += 1;
  }
});

paper.addEventListener("click", function () {
  startButton.textContent = "End Game";
  start = false;
  randomHandOutput();
  if (randomHand === 0) {
    result.textContent = "Paper beats Rock. You Win!";
    win += 1;
  } else if (randomHand === 1) {
    result.textContent = "It's a Tie!";
    tie += 1;
  } else {
    result.textContent = "Scissors beats Paper. You Lose!";
    lose += 1;
  }
});

scissors.addEventListener("click", function () {
  startButton.textContent = "End Game";
  start = false;
  randomHandOutput();
  if (randomHand === 0) {
    result.textContent = "Rock beats Scissors. You Lose!";
    lose += 1;
  } else if (randomHand === 1) {
    result.textContent = "Scissors beats Paper. You Win!";
    win += 1;
  } else {
    result.textContent = "It's a Tie!";
    tie += 1;
  }
});

function randomHandOutput() {
  randomHand = Math.floor(Math.random() * 3);
  if (randomHand == 0) {
    randomHandPicked.innerHTML = "<i class='far fa-hand-rock'></i>";
  } else if (randomHand == 1) {
    randomHandPicked.innerHTML = "<i class='far fa-hand-paper'></i>";
  } else {
    randomHandPicked.innerHTML = "<i class='far fa-hand-scissors'></i>";
  }
}
