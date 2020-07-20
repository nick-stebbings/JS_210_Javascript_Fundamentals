/*
P:
Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

Examples:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

Rules: implicit - a word is a part of the string separated by space

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
function reverseSentence(str) {
  return str.split` `.reverse().join` `;
}
