/*
P:

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

E:
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103

D:
  Input = none
  Output = 6 strings representing the above

A:
   - get rlsync answers to two questions
   - set two variables, one for each answer
   - interpolate the results in 6 different strings
   - don't forget the / is supposed to be integer division
    - get the floor of the floating point result.
   -
*/

function twoNumberArithmetic() {
  const rlSync = require('readline-sync');
  let num1 = rlSync.question('Enter the first number: \n');
  let num2 = rlSync.question('Enter the second number: \n');

  const OPERATIONS = ['+', '-', '*', '/', '%', '**'];

  OPERATIONS.forEach((op) => {
    let resultOfOperation;
    switch (op) {
      case '/':
        resultOfOperation = Math.floor(num1 / num2);
        break;

      case '**':
        resultOfOperation = Math.pow(num1, num2);
        break;

      default:
        resultOfOperation = eval(num1 + op + num2);
    }
    console.log(`${num1} ${op} ${num2} = ${resultOfOperation}`);
  });
}
