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
   

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""


*/
function doubleChar(str) {
  let chars = [...str];
  let results = '';
  for (let i = 0; i < str.length; i++) {
    results += chars[i] + chars[i];
  }
  return results;
}
console.log(doubleChar('hello there!'));
