/** 
 * REFACTORY BOOTCAMP ASSIGNMENT BY:
 * Grace Babirye and Stephen Kasirye
*/

// Factorial Function using the recursive approach
factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
// console.log(factorial(5));

module.exports = factorial;