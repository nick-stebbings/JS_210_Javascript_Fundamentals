/*
P:

E:

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
   

Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

Examples:

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true


*/
function isUppercase(str) {
  return [...str].every((char) => char.toUpperCase() == char);
}

console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!')); // true
console.log(isUppercase('')); // true
