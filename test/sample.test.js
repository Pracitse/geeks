const request = require("supertest");
const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/sample.js");
describe("GET /students", () => {
  test("It responds with an array of students", async () => {
    const response = await request(app).get("/hiii");
    //expect(response.body.length).toBe(2);
    //expect(response.body[0]).toHaveProperty("id");
    //expect(response.body[0]).toHaveProperty("name");
    expect(response.body.message).toBe("Hello World!");
    expect(response.statusCode).toBe(200);
  });
});
