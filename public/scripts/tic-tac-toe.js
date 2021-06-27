let topOne = document.querySelector(".top-one");
let topTwo = document.querySelector(".top-two");
let topThree = document.querySelector(".top-three");
let middleOne = document.querySelector(".middle-one");
let middleTwo = document.querySelector(".middle-two");
let middleThree = document.querySelector(".middle-three");
let bottomOne = document.querySelector(".bottom-one");
let bottomTwo = document.querySelector(".bottom-two");
let bottomThree = document.querySelector(".bottom-three");
let resultTitle = document.querySelector(".result-div");

let move = "X";
let gameActive = true;
let result = "";

function play(){
    if(move === "X"){
        move = "O";
    }else{
        move = "X";
    }
}

function gameStatus(){
    if(topOne.textContent === topTwo.textContent && topTwo.textContent === topThree.textContent && topOne.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(middleOne.textContent === middleTwo.textContent && middleTwo.textContent === middleThree.textContent && middleOne.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(bottomOne.textContent === bottomTwo.textContent && bottomTwo.textContent === bottomThree.textContent && bottomOne.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(topOne.textContent === middleOne.textContent && middleOne.textContent === bottomOne.textContent && topOne.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(topTwo.textContent === middleTwo.textContent && middleTwo.textContent === bottomTwo.textContent && topTwo.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(topThree.textContent === middleThree.textContent && middleThree.textContent === bottomThree.textContent && topThree.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(topOne.textContent === middleTwo.textContent && middleTwo.textContent === bottomThree.textContent && topOne.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(topThree.textContent === middleTwo.textContent && middleTwo.textContent === bottomOne.textContent && topThree.textContent !== ""){
        gameActive = false;
        result = move + " Wins";
    }else if(topOne.textContent !== "" && topTwo.textContent !== "" && topThree.textContent !== "" && middleOne.textContent !== "" && middleTwo.textContent !== "" && middleThree.textContent !== "" && bottomOne.textContent !== "" && bottomTwo.textContent !== "" && bottomThree.textContent !== ""){
        gameActive = false;
        result = "Tie!!!";
    }

    if(!gameActive){
        gameResult();
    }
}

function gameResult(){
    resultTitle.innerHTML = "<h2>" + result + "</h2>";
}

topOne.addEventListener("click", function(){
    if(gameActive && topOne.textContent === ""){
        topOne.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

topTwo.addEventListener("click", function(){
    if(gameActive && topTwo.textContent === ""){
        topTwo.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

topThree.addEventListener("click", function(){
    if(gameActive && topThree.textContent === ""){
        topThree.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

middleOne.addEventListener("click", function(){
    if(gameActive && middleOne.textContent === ""){
        middleOne.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

middleTwo.addEventListener("click", function(){
    if(gameActive && middleTwo.textContent === ""){
        middleTwo.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

middleThree.addEventListener("click", function(){
    if(gameActive && middleThree.textContent === ""){
        middleThree.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

bottomOne.addEventListener("click", function(){
    if(gameActive && bottomOne.textContent === ""){
        bottomOne.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

bottomTwo.addEventListener("click", function(){
    if(gameActive && bottomTwo.textContent === ""){
        bottomTwo.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});

bottomThree.addEventListener("click", function(){
    if(gameActive && bottomThree.textContent === ""){
        bottomThree.textContent = move;
        gameStatus();
        play();
        console.log(gameActive + "/" + result);
    }
});
