let canvas = document.querySelector("#tetris-canvas");
let ctx = canvas.getContext("2d");
let gameBoardHeight = 20;
let gameBoardWidth = 12;
let startX = 4;
let startY = 0;
let score = 0;
let level = 1;
let winOrLose = "Playing"
let stoppedShapeArray = [...Array(gameBoardHeight).map(e => Array(gameBoardWidth).fill())];
let gameBoardArray = [...Array(gameBoardHeight).map(e => Array(gameBoardWidth).fill())]
let currentTetromino =[[1,0], [0,1], [1,1], [2,1]];
let tetrominos  = [];
let tetrominoColors = ['red', 'green', 'yellow', 'purple', 'blue', 'pink', 'orange'];
let currentTetrominoColor = "";
let DIRECTION = {
    IDLE: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
};
let direction;

class Coordinates{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

document.addEventListener('DOMContentLoaded', SetupCanvas);

function CreateCoordinateArray(){
    let i = 0;
    let j = 0;

    for(let y = 9; y <= 446; y += 23){
        for (let x = 11; x <=264; x += 23){
            coordinateArray[i][j] = new Coordinates(x, y);
            i++;
        }
        j++;
        i=0;
    }
}

function SetupCanvas(){
    canvas = document.querySelector("#tetris-canvas");
    ctx = canvas.getContext('2d');

    canvas.width = 936;
    canvas.height = 956;

    ctx.scale(2,2);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(8, 8, 280, 462);

    ctx.fillStyle = 'black';
    ctx.font = '21px Arial';
    ctx.fillText("SCORE", 300, 98);

    ctx.strokeRect(300, 107, 161, 24);
    ctx.fillText(score.toString(), 310, 127);

    ctx.fillText("LEVEL", 300, 157);
    ctx.strokeRect(300, 171, 161, 24);
    ctx.fillText(level.toString(), 310, 190)

    ctx.fillText("WIN / LOSE", 300, 221);
    ctx.fillText(winOrLose, 310, 261);
    ctx.strokeRect(300, 232, 161, 95)

    document.addEventListener('keydown', HandleKeyPress);
    CreateTetrominos();
    CreateTetromino();

    CreateCoordinateArray();
    DrawTetromino();
}

function DrawTetromino(){
    for(let i = 0; i < currentTetromino.length; i++){
        let x = currentTetromino[i][0] + startX;
        let y = currentTetromino[i][1] + startY;
        gameBoardArray[x, y] = 1;
        let coordinateX = coordinateArray[x][y].x;
        let coordinateY = coordinateArray[x][y].y;
        ctx.fillStyle = currentTetrominoColor;
        ctx.fillRect = (coordinateX, coordinateY, 21, 21);
    }
}

function HandleKeyPress(key){
    if(key.keyCode === 65){
        direction = DIRECTION.LEFT;
        if(!HittingWall()){
            DeleteTetromino();
            startX--;
            DrawTetromino();
        }
    }else if(key.keyCode === 68){
        direction = DIRECTION.RIGHT;
        if(!HittingWall()){
            DeleteTetromino();
            startX++;
            DrawTetromino();
        }
    }else if(key.keyCode === 83){
        direction = DIRECTION.DOWN;
        if(!HittingWall()){
            DeleteTetromino();
            startY++;
            DrawTetromino();
        }
    }
}

function DeleteTetromino(){
    for(let i = 0; i < currentTetromino.length; i++){
        let x = currentTetromino[i][0] + startX;
        let y = currentTetromino[i][1] + startY;
        gameBoardArray[x][y] = 0;
        let coordinateX = coordinateArray[x][y].x;
        let coordinateY = coordinateArray[x][y].y;
        ctx.fillStyle = 'white';
        ctx.fillRect = (coordinateX, coordinateY, 21, 21);
    }
}

function CreateTetrominos(){
    tetrominos.push([[1, 0], [0, 1], [1, 1], [2,1]]);
    tetrominos.push([[0, 0], [1, 0], [2, 0], [3,0]]);
    tetrominos.push([[0, 0], [0, 1], [1, 1], [2,1]]);
    tetrominos.push([[0, 0], [1, 0], [0, 1], [1,1]]);
    tetrominos.push([[2, 0], [0, 1], [1, 1], [2,1]]);
    tetrominos.push([[1, 0], [2, 0], [0, 1], [1,1]]);
    tetrominos.push([[0, 0], [1, 0], [1, 1], [2,1]]);
}

function CreateTetromino(){
    let randomTetromino = Math.floor(Math.random() * tetrominos.length);
    currentTetromino = tetrominos[randomTetromino];
    currentTetrominoColor = tetrominoColors[randomTetromino]
}

function HittingWall(){
    for(let i = 0; i < currentTetromino.length; i++){
        let newX = currentTetromino[i][0] + startX;
        if(newX <= 0 && direction === DIRECTION.LEFT){
            return true;
        }else if(newX >= 11 && direction === DIRECTION.RIGHT){
            return true;
        }
    }

    return false;
}