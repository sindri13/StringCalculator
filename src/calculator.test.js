const add = require("./calculator"); // Including the calculator.js

it("Should return a zero on an empty string", () => {
  expect(add("")).toBe(0);
});
