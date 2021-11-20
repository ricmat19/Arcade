//requires the express framework for this file
const express = require("express");
const cors = require("cors");
//creates a variable to hold the express framework
const app = express();

//Middleware: Puts the json data in a pages body in a req object, parses the data
app.use(express.json());

//allows for different domains to communicate
app.use(
  cors({
    origin: [process.env.ORIGIN, process.env.ARCADE_API]
  })
);

app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

//uses the Express use() method
//the use() method is used to implement middleware on the server
//middleware used to give the server access to programs front-end files
app.use(express.static("public"));

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  
}

//uses the Express listen() method
//the listen() is used to run the server on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port: ${process.env.PORT}`);
});
