//requires the express framework for this file
const express = require("express");
const cors = require("cors");
const hb = require("express-handlebars");
//creates a variable to hold the express framework
const app = express();

//Middleware: Puts the json data in a pages body in a req object, parses the data
app.use(express.json());

//allows for different domains to communicate
app.use(
  cors({
    origin: [process.env.ORIGIN, process.env.ARCADE_API],
  })
);

app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

app.engine("handlebars", hb());
app.set("view engine", "handlebars");
app.set("views", "./client/views");

app.use(express.static("client/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/hangman", (req, res) => {
  res.render("hangman", {
    title: "Hangman",
    css: "css/hangman.css",
    js: "scripts/hangman.js",
  });
});

app.get("/memory", (req, res) => {
  res.render("memory", {
    title: "Memory",
    css: "css/memory.css",
    js: "scripts/memory.js",
  });
});

app.get("/rock-paper-scissors", (req, res) => {
  res.render("rock-paper-scissors", {
    title: "Rock-Paper-Scissors",
    css: "css/rock-paper-scissors.css",
    js: "scripts/rock-paper-scissors.js",
  });
});

app.get("/tetris", (req, res) => {
  res.render("tetris", {
    title: "Tetris",
    css: "css/tetris.css",
    js: "scripts/tetris.js",
  });
});

app.get("/tic-tac-toe", (req, res) => {
  res.render("tic-tac-toe", {
    title: "Tic-Tac-Toe",
    css: "css/tic-tac-toe.css",
    js: "scripts/tic-tac-toe.js",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server is starting at port: " + process.env.PORT);
});
