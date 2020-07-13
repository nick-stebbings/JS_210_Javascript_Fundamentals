//  Write a function that takes a string of digits, 
// and returns the appropriate number as an integer.

// The string may have a leading + or - sign;
//  if the first character is a +, your function should return a positive number; 
// if it is a -, your function should return a negative number.
//  If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// Input: string
// Output: integer

function myParseInt(str) {
  let count = 0;

  str.split``.reverse().forEach((digit, index) => {
    debugger;
    switch (digit) {
      case "+":
        break;
        case "-":
          count = (count * -1);
        break;
      default:
        count += digit * 10 ** index;
      }
  });
  return count;
};
let a = "-43";
console.log(myParseInt(a));