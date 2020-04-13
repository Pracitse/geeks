const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
  //return res;
});
/**app.use((req, res) => {
  res.status(200);
  res.send("Hello World!");
});
app.use((req, res) => {
  res.status(200);
  res.send("Hello World!");
  return res;
});*/

module.exports = app;
