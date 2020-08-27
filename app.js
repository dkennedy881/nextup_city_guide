var createError = require("http-errors");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//  Body Parser middleware
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/", function (req, res) {
  res.sendFile("index.html", path.join(__dirname, "client/index.html"));
});

app.listen(process.env.PORT || 5000);

module.exports = app;
