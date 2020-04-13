const express = require("express");
const app = express();
///Users/bhagyalakshmi/Documents/hrms/src/api/hrms/appl.js
/**app.get("/test", (req, res, next) => {
  res.status(200);
  res.send("Hello World!");
  //return res;
});*/
app.use((req, res) => {
  res.status(200);
  res.send.json({
    message: "Hello World!"
  });
});

module.exports = app;
