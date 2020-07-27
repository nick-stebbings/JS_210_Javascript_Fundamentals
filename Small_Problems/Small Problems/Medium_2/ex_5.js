/*
P:
A featured number (something unique to this exercise) is an 

- odd number 
- that is a multiple of 7, 
- with all of its digits occuring exactly once each. 

For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

D:
  Input =
  Output =

A:
   -
   -
   -
   -
   -
   -
*/

function hasNoRepeatingDigits(num) {
  return [...String(num)].sort((a, b) => +a - +b).join``.match(/(.)\1+/g) === null;
}

function isFeatured(num) {
  return num % 2 !== 0 && num % 7 === 0 && hasNoRepeatingDigits(num);
}
function featured(number) {
  if (number > 9876543201) {
    throw `Number too large!`;
  }
  for (let i = number + 1; i < 9876543201; i++) {
    if (isFeatured(i)) {
      return i;
    }
  }
  throw 'No featured number after yours!';
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(98765432013)); // error
