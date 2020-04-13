const app = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/appl.js");
const supertest = require("supertest");
const sum = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/sum.js");
const request = supertest.agent(app);
describe("this test for get request", () => {
  it.skip("it successfully access the endpoint", done => {
    request
      .get("\test")
      .expect(200)
      .then(res => {
        expect(res.statusCode).toBe(400);
        expect(res.body).toBe("Hello World!");
      });
  });
  /**it("sample test", () => {
    expect(true).toBe(true);
  });
  it("sum of 2+3 ===5 its true ", () => {
    expect(sum(2, 3)).toBe(5);
  });*/
});
