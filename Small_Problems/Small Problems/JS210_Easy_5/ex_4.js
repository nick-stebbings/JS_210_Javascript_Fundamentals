/*
P:
Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
E:

D:
  Input =
  Output =

A:
   - destructure into chars array
   - if length of this array is even, lowerMid = length/2, upperMid = lowerMid + 1
   - slice the array taking two arguments and join
   -else just return element floor(length/2)
   -
   -
*/

function centerOf(str) {
  if (str.length % 2 == 0) {
    let lowerMid = str.length / 2;
    return [...str].slice(lowerMid - 1, lowerMid + 1).join``;
  } else {
    return [...str][Math.floor(str.length / 2)];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"
