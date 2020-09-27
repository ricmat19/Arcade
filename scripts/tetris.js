let canvas = document.querySelector("#tetris-canvas");
let preview = document.querySelector("#preview-canvas");
let ctx = canvas.getContext("2d");
let squareSize = 20;
let gap = 1;
let gappedSquare = squareSize + gap;
let centerX = canvas.width / 2;
let currentXPosition = 0;
let currentYPosition = 0;
let frames = 0;
let speed = 1;

//Canvas Size
canvas.width = 300;
canvas.height = 525;

//Preview Size
preview.width = 100;
preview.height = 100;

currentXPosition = centerX;

document.addEventListener("keydown", function moveLeft(){
    if(event.keyCode === 37){
        if(currentXPosition > 0 + gappedSquare){
            currentXPosition -= 3;
        }
    }
});

document.addEventListener("keydown", function moveRight(){
    if(event.keyCode === 39){
        if(currentXPosition < canvas.width - gappedSquare){
            currentXPosition += 3;
        }
    }
});

let square = {
    color: 'red',
    one: 'ctx.fillRect(currentXPosition - squareSize, currentYPosition, squareSize, squareSize)',
    two: 'ctx.fillRect(currentXPosition + gap, currentYPosition, squareSize, squareSize)',
    three: 'ctx.fillRect(currentXPosition - squareSize, currentYPosition+ gappedSquare, squareSize, squareSize)',
    four: 'ctx.fillRect(currentXPosition + gap, currentYPosition + gappedSquare, squareSize, squareSize)'
}

let line = {
    color: 'blue',
    one: 'ctx.fillRect(currentXPosition - squareSize - squareSize - gap, currentYPosition, squareSize, squareSize)',
    two: 'ctx.fillRect(currentXPosition - squareSize, currentYPosition, squareSize, squareSize)',
    three: 'ctx.fillRect(currentXPosition + gap, currentYPosition, squareSize, squareSize)',
    four: 'ctx.fillRect(currentXPosition + gappedSquare + gap, currentYPosition, squareSize, squareSize)'
}

let pyramid = {
    color: 'green',
    one: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize)',
    two: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition + gappedSquare, squareSize, squareSize)',
    three: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize)',
    four: 'ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition + gappedSquare, squareSize, squareSize)'
}

let downUp = {
    color: 'yellow',
    one: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize)',
    two: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition, squareSize, squareSize)',
    three: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize)',
    four: 'ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition + gappedSquare, squareSize, squareSize)'
}

let upDown = {
    color: 'purple',
    one: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize)',
    two: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition + gappedSquare, squareSize, squareSize)',
    three: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize)',
    four: 'ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition, squareSize, squareSize)'
}

let r = {
    color: 'white',
    one: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize)',
    two: 'ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition, squareSize, squareSize)',
    three: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize)',
    four: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare + gappedSquare, squareSize, squareSize)'
}

let seven = {
    color: 'pink',
    one: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize)',
    two: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition, squareSize, squareSize)',
    three: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize)',
    four: 'ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare + gappedSquare, squareSize, squareSize)'
}

let shapeArray = [square, line, pyramid, downUp, upDown, r, seven];

let randomShape = Math.floor(Math.random() * shapeArray.length);

function draw(shape){

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //Square
        ctx.fillStyle = shape.color;
        //top left
        eval(shape.one);
        //top right
        eval(shape.two);
        //bottom left
        eval(shape.three);
        //bottom right
        eval(shape.four);

        currentYPosition += speed;

}

function runGame(){

    // update();

    let shape = shapeArray[randomShape];

    draw(shape);

    frames++;

    if(currentYPosition <= (canvas.height - (gappedSquare + gappedSquare - speed))){
        window.requestAnimationFrame(runGame);
    }

}

runGame();