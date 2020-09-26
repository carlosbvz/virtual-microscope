require('dotenv/config');
const express = require("express");
// import express from 'express';
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/api");
const db = require('./database-connection');
const app = express();

app.use(express.json());
app.use(express.static("public/build"));
app.use(cookieParser());

// Routes
app.use("/api", apiRouter);
// Redirecting all other routes to home
app.get("/*", (req, res) =>
  res.sendFile(__dirname + "/public/build/index.html")
);

// Error Handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
