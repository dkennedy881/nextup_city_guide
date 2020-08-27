var createError = require("http-errors"); //created on init
var express = require("express"); //created on init
var path = require("path"); //created on init
var cookieParser = require("cookie-parser"); //created on init
var logger = require("morgan"); //created on init

var indexRouter = require("./routes/index"); //created on init
var usersRouter = require("./routes/users"); //created on init

var app = express(); //created on init

// view engine setup
app.set("views", path.join(__dirname, "views")); //created on init
app.set("view engine", "pug"); //created on init

app.use(logger("dev")); //created on init
app.use(express.json()); //created on init
app.use(express.urlencoded({ extended: false })); //created on init
app.use(cookieParser()); //created on init
// app.use(express.static(path.join(__dirname, 'public'))); //created on init
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  // res.sendFile("index1.html", { root: path.join(__dirname, "../client/build") });
  res.sendFile("./client/build/index.html", { root: __dirname });
});

// app.use('/', indexRouter); //created on init
// app.use('/users', usersRouter); //created on init

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// }); //created on init

// error handler
//created on init below
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
