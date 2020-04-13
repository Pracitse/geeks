const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/sample.js");
const http = require("http");

const server = http.createServer(app);
server.listen(3003, () => {
  console.log("server running on port 3003");
});
