
// ex_9.js
/*
P:
write a function that takes a positive integer or zero, and converts it to a string representation.

Rules: 
You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.
E:
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
D:
  Input = number
  Output = string

A:
  - SET a reference object (NUMS)
  - SET leftOver = num
   - Calculate the digit at each order of magnitude of the input number
    - WHILE leftOver > 9
    - SET remainder = leftOver / 10
    - PUSH onto results string the value from the NUMS reference object 
    - SET leftOver equal to Math.floor(leftOver/ 10)
   -
   -
   -
   -
*/

function convertNumberToString(num) {
  const NUMS = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9" };
  let resultsArray = [];
  let leftOver = num;
  let remainder;

  while (Math.abs(leftOver) > 9) {
    remainder = leftOver % 10
    resultsArray.unshift(NUMS[Math.abs(remainder)]);
    
    leftOver = Math.floor(Math.abs(leftOver / 10));
  }
  resultsArray.unshift(NUMS[leftOver]);
  switch (true) {
    case num > 0:
      resultsArray.unshift("+");
      break;
    case num < 0:
      resultsArray.unshift("-");
      break;
  }

  return resultsArray.join('');
}

console.log(convertNumberToString(-345));
console.log(typeof convertNumberToString(345));
console.log(convertNumberToString(0));
console.log(typeof convertNumberToString(0));
console.log(convertNumberToString(5000));
console.log(typeof convertNumberToString(5000));