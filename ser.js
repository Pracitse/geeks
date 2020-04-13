const http = require("http");
const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/appli.js");
const server = http.createServer(app);
server.listen(3000, () => console.log("server starting on port 3000"));
