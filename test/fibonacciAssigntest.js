/**
 * REFACTORY BOOTCAMP ASSIGNMENT BY:
 * Grace Babirye and Stephen Kasirye
 */

// Test file for the fibonacci function
const assert = require("chai").assert;
const fibonacci = require("../fibonacciAssign");

describe("Fibonacci Tests", () => {
  it("test that output is true to fibonacci function", () => {
    assert.equal(fibonacci(7), 13);
  });
});
