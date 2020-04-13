const http = require("http");
const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/ptc.js");
const server = http.createServer(app);
server.listen(3005, () => {
  console.log("server runs on port number 3005");
});
