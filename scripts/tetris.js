let canvas = document.querySelector("#tetris-canvas");
let preview = document.querySelector("#preview-canvas");
let ctx = canvas.getContext("2d");
let squareSize = 20;
let gappedSquare = 21;
let centerX = canvas.width / 2;
let currentXPosition = 0;
let currentYPosition = 0;
let begin = 0;
let gap = 1;

canvas.width = 300;
canvas.height = 525;

preview.width = 100;
preview.height = 100;

currentXPosition = centerX;

function runGame(timestamp){

    // for(let i = 0; i < canvas.height - 7; i++){

        // if(begin === 0){
        //     begin = timestamp;
        // }

        // let elapsed = timestamp - begin;

        // ctx.clearRect(0, 0, innerWidth, innerHeight);

        //Square
        ctx.fillStyle = "red";
        //top left
        ctx.fillRect(currentXPosition - squareSize, currentYPosition, squareSize, squareSize);
        //top right
        ctx.fillRect(currentXPosition + gap, currentYPosition, squareSize, squareSize);
        //bottom left
        ctx.fillRect(currentXPosition - squareSize, currentYPosition+ gappedSquare, squareSize, squareSize);
        //bottom right
        ctx.fillRect(currentXPosition + gap, currentYPosition + gappedSquare, squareSize, squareSize);

        currentYPosition += gappedSquare + gappedSquare;

        //line
        ctx.fillStyle = "blue";
        //square 1
        ctx.fillRect(currentXPosition - squareSize - squareSize - gap, currentYPosition, squareSize, squareSize);
        //square 2
        ctx.fillRect(currentXPosition - squareSize, currentYPosition, squareSize, squareSize);
        //square 3
        ctx.fillRect(currentXPosition + gap, currentYPosition, squareSize, squareSize);
        //square 4
        ctx.fillRect(currentXPosition + gappedSquare + gap, currentYPosition, squareSize, squareSize);


        currentYPosition += gappedSquare;

        //pyramid
        ctx.fillStyle = "green";
        //top
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize);
        //bottom 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition + gappedSquare, squareSize, squareSize);
        //bottom 2
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize);
        //bottom 3
        ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition + gappedSquare, squareSize, squareSize);

        currentYPosition += gappedSquare + gappedSquare;

        //down-up
        ctx.fillStyle = "yellow";
        //down 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize);
        //down 2
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition, squareSize, squareSize);
        //up 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize);
        //up 2
        ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition + gappedSquare, squareSize, squareSize);

        currentYPosition += gappedSquare + gappedSquare;

        //up-down
        ctx.fillStyle = "purple";
        //up 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize);
        //up 2
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition + gappedSquare, squareSize, squareSize);
        //down 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize);
        //down 2
        ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition, squareSize, squareSize);

        currentYPosition += gappedSquare + gappedSquare;

        //r
        ctx.fillStyle = "white";
        //top
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize);
        //top 2
        ctx.fillRect(currentXPosition + ((squareSize + gap) / 2) + gap, currentYPosition, squareSize, squareSize);
        //bottom 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize);
        //bottom 2
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare + gappedSquare, squareSize, squareSize);

        currentYPosition += gappedSquare + gappedSquare + gappedSquare;

        //7
        ctx.fillStyle = "pink";
        //top
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition, squareSize, squareSize);
        //bottom 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2) - squareSize - gap, currentYPosition, squareSize, squareSize);
        //bottom 1
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare, squareSize, squareSize);
        //bottom 2
        ctx.fillRect(currentXPosition - ((squareSize - gap) / 2), currentYPosition + gappedSquare + gappedSquare, squareSize, squareSize);

        // if (elapsed < 2000) {
        //     window.requestAnimationFrame(runGame);
        // }

    // }

}

runGame();