const {
  add,
  mul,
  div,
  sub
} = require("/Users/bhagyalakshmi/Documents/hrms/src/api/hrms/arth.js");
describe("arthimatic operations ", () => {
  xtest("skipping addition of two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  test.skip("substraction of two numbers", () => {
    expect(sub(4, 3)).toBe(1);
  });
  xtest("multiplication of two numbers ", () => {
    expect(mul(2, 3)).toBe;
  });
  xtest("division of two numbers ", () => {
    expect(div(4, 2)).toBe(2);
  });
  xtest.each([
    [1, 2, 3],
    [-1, 2, 1],
    [2, 4, 6]
  ])("%i+%i equals %i ", (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
  xtest.each([
    [2, 3, -1],
    [5, 3, 2],
    [1, -1, 2]
  ])("%i - %i equals %i", (a, b, expected) => {
    expect(sub(a, b)).toBe(expected);
  });
  xtest.each([
    [2, 3, 6],
    [1, 2, 2],
    [-3, 5, -15]
  ])("%i * %i equals %i", (a, b, expected) => {
    expect(mul(a, b)).toBe(expected);
  });
});
