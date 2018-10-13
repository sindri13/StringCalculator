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

it("Should return the sum of two numbers that are sepperated by newline ", () => {
  expect(add("1,2\n3")).toBe(6);
});

it("Should throw error on negative number", () => {
    expect(() => add("-1,-2")).toThrow('Negatives not allowed: -1,-2');
});

it("Should throw error on negative number when also given positive numbers", () => {
    expect(() => add("2,-4,3,-5")).toThrow('Negatives not allowed: -4,-5');
});

it("Should ignore numbers over 1000", () => {
    expect(add("1001,2")).toBe(2);
});
