const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const emp = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/emp.js");
const Comp = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/company.js");
const app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//const proces = process.processsing();
app.use("/employees", emp);
app.use("/company", Comp);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,DELETE");
  next();
});
app.use((req, res, next) => {
  const error = new Error("Not Found");
  res.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
