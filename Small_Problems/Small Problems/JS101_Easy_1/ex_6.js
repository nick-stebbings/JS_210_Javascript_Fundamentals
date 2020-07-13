// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

function sumOrProduct() {
  const rlSync = require('readline-sync');
  let intArg = Number(rlSync.question('Please enter an integer greater than 0:\n'));
  let sumOrP = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n');
  let answer = 0

  if (sumOrP == 's') {
    for (let index = 1; index <= intArg; index++) {
      answer += index;
    }
  } else {
    answer = 1
    for (let index = 1; index <= intArg; index++) {
      answer *= index;
    }
  }
  console.log(`The sum of the integers between 1 and ${intArg} is ${answer}`);
}