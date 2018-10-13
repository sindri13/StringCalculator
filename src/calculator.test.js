const add = require("./calculator"); // Including the calculator.js

it("Should return a zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("Should return the number input if it's only one number", () => {
  expect(add("5")).toBe(5);
});

it("Should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("Should return the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});
