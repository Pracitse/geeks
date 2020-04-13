const express = require("express");
const app = express();
const comp = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/comp.js");
app.use("/company", comp);

module.exports = app;
