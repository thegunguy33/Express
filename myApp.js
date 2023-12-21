let express = require("express");
let app = express();
let bGround = require('fcc-express-bground');
require("dotenv").config();

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + "-" + req.ip);
  next();
});

//bGround.log("Hellow World");
// console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

//app.get("/json", (req, res) => {
//  if (process.env["MESSAGE_STYLE"] == "uppercase") {
//    res.json({
//      message: "Hello Json".toUpperCase(),
//    });
//  } else {
//    res.json({
//      message: "Hello json",
//    });
//  }
//});

module.exports = app;