const http = require("http");
const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/compapp.js");
const server = http.createServer(app);
server.listen(4000, () => {
  console.log("server runs on port 4000");
});
