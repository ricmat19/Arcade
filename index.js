const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

app.get('/hangman', (req, res) => {
    res.render('hangman', 
    {title: "Hangman",
    css: "css/hangman.css",
    js: "scripts/hangman.js"}); 
})

app.get('/memory', (req, res) => {
    res.render('memory', 
    {title: "Memory",
    css: "css/memory.css",
    js: "scripts/memory.js"});
})

app.get('/rock-paper-scissors', (req, res) => {
    res.render('rock-paper-scissors', 
    {title: "Rock-Paper-Scissors",
    css: "css/rock-paper-scissors.css",
    js: "scripts/rock-paper-scissors.js"});
})

app.get('/tetris', (req, res) => {
    res.render('tetris', 
    {title: "Tetris",
    css: "css/tetris.css",
    js: "scripts/tetris.js"});
})

app.get('/tic-tac-toe', (req, res) => {
    res.render('tic-tac-toe', 
    {title: "Tic-Tac-Toe",
    css: "css/tic-tac-toe.css",
    js: "scripts/tic-tac-toe.js"});
})

app.listen(8080, () => {
    console.log('Server is starting at port', 8080);
})