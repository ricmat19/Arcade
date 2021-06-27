let topOne = document.querySelector(".top-one");
let topTwo = document.querySelector(".top-two");
let topThree = document.querySelector(".top-three");
let middleOne = document.querySelector(".middle-one");
let middleTwo = document.querySelector(".middle-two");
let middleThree = document.querySelector(".middle-three");
let bottomOne = document.querySelector(".bottom-one");
let bottomTwo = document.querySelector(".bottom-two");
let bottomThree = document.querySelector(".bottom-three");

let move = "X";
let game = active;

function play(){
    if(move === "X"){
        move = "O";
    }else{
        move = "X";
    }
}

function gameStatus(){
    if(topOne.textContent === topTwo.textContent === topThree.textContent && topOne.textContent !== ""){

    }else if(middleOne.textContent === middleTwo.textContent === middleThree.textContent && middleOne.textContent !== ""){

    }else if(bottomOne.textContent === bottomTwo.textContent === bottomThree.textContent && bottomOne.textContent !== ""){

    }else if(topOne.textContent === middleOne.textContent === bottomOne.textContent && topOne.textContent !== ""){

    }else if(topTwo.textContent === middleTwo.textContent === bottomThree.textContent && topTwo.textContent !== ""){

    }else if(topThree.textContent === middleThree.textContent === bottomThree.textContent && topThree.textContent !== ""){

    }else if(topOne.textContent === middleTwo.textContent === bottomThree.textContent && topOne.textContent !== ""){

    }else if(topThree.textContent === middleTwo.textContent === bottomOne.textContent && topThree.textContent !== ""){

    }else if(topOne.textContent !== "" && topTwo.textContent !== "" && topThree.textContent !== "" && middleOne.textContent !== "" && middleTwo.textContent !== "" && middleThree.textContent !== "" && bottomOne.textContent !== "" && bottomTwo.textContent !== "" && bottomThree.textContent !== ""){

    }
}

topOne.addEventListener("click", function(){
    topOne.textContent = move;
    play();
});

topTwo.addEventListener("click", function(){
    topTwo.textContent = move;
    play();
});

topThree.addEventListener("click", function(){
    topThree.textContent = move;
    play();
});

middleOne.addEventListener("click", function(){
    middleOne.textContent = move;
    play();
});

middleTwo.addEventListener("click", function(){
    middleTwo.textContent = move;
    play();
});

middleThree.addEventListener("click", function(){
    middleThree.textContent = move;
    play();
});

bottomOne.addEventListener("click", function(){
    bottomOne.textContent = move;
    play();
});

bottomTwo.addEventListener("click", function(){
    bottomTwo.textContent = move;
    play();
});

bottomThree.addEventListener("click", function(){
    bottomThree.textContent = move;
    play();
});
