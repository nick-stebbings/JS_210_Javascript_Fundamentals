/*
P:

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns 
 - the number provided as an argument multiplied by two, 
  -  unless the argument is a double number;
    - then return double numbers as-is.

Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676


D:
  Input = number
  Output = number

A:
   - assume that the number is a positive integer.

   - get the string form of the number, set it to a variable
   - IF the first half of the string === last half, return the string
   - ELSE return the number * 2
   -
   -
   -
*/

function twice(num) {
  // With a closure (for practice)
  let strValue = String(num);
  return strValue.length % 2 == 0 ? mappedStr(strValue) : num * 2; // Only even length nums

  function mappedStr(str) {
    let halfLen = str.length / 2;
    return str.slice(0, halfLen) === str.slice(halfLen) ? num : num * 2;
  }
}
