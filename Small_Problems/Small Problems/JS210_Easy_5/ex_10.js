/*
P:

Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. 

- All five-or-more letter words should have their letters in reverse order.
- The string argument will consist of only letters and spaces.
- Words will be separated by a single space.

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
*/

console.log(reverseWords('Professional')); // "lanoisseforP"
console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')); // "hcnuaL loohcS"

function reverseWords(str) {
  return str.split` `.map((word) => (word.length < 5 ? word : [...word].reverse().join``)).join` `;
}
