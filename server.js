const http = require("http");
const app = require("./app.js");
const process = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/proces.js");

const server = http.createServer(app);
server.listen(8082, async function() {
  console.log("server listening on port 8082");
  const proces = await process.processing();
});
