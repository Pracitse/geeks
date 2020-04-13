const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", (req, res) => {
  return res.json({
    msg: "Hello World!"
  });
  //res.json({ message: "Hello World!" });
  //return res;
});

module.exports = app;
///Users/bhagyalakshmi/Documents/hrms/src/api/hrms/ptc.js
