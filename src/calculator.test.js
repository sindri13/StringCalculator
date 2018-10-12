const add = require("./calculator"); // Including the calculator.js

it("Should return a zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("Should return the number input if it's only one number", () => {
  expect(add("5")).toBe(5);
});
