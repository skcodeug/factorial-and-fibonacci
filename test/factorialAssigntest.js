/** 
 * REFACTORY BOOTCAMP ASSIGNMENT BY:
 * Grace Babirye and Stephen Kasirye
*/

// Test file for the factorial function
const assert = require("chai").assert;
const factorial = require("../factorialAssign");

describe("Factorial Tests", () => {

    it("test that output is a factorial", () => {
        assert.equal(factorial(5), 120);
    });

});
