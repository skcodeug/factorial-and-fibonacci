/** 
 * REFACTORY BOOTCAMP ASSIGNMENT BY:
 * Grace Babirye and Stephen Kasirye
*/

// Fibonacci Function using the recursive approach​
fibonacci = (num) => {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};
// console.log(fibonacci(7));

module.exports = fibonacci;
