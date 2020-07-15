/*
P:
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

E:

D:
  Input = str
  Output = str

A:
   -
*/

function penultimate(str) {
  return str.split(' ').slice(-2, -1)[0];
}
console.log(penultimate('last word')); // === 'last'); // logs true
console.log(penultimate('Launch School is great!')); // === 'is'); // logs true
