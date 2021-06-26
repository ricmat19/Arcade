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
let went = false;

topOne.addEventListener("click", play);
topTwo.addEventListener("click", play);
topThree.addEventListener("click", play);
middleOne.addEventListener("click", play);
middleTwo.addEventListener("click", play);
middleThree.addEventListener("click", play);
bottomOne.addEventListener("click", play);
bottomTwo.addEventListener("click", play);
bottomThree.addEventListener("click", play);

function play(move, went){
    if (went = true){
        move = "O";
        went = false;
    }else{
        move = "X";
        went = true;
        console.log("X");
    }
    
}
