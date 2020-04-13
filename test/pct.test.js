const request = require("supertest");
const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/ptc.js");
describe("display hello world", () => {
  it("it should return hello world ", async () => {
    const res = await request(app).get("/");
    //expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Hello World!");
    expect(res.statusCode).toBe(200);
  });
});
