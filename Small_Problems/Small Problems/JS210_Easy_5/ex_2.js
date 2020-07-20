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
   


Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""


*/
function doubleConsonants(str) {
  if (!str) {
    return str;
  }
  let chars = [...str];
  let vowelRegex = /((?![aeiou0-9_])[\w])/i;

  let results = '';
  for (let i = 0; i < str.length; i++) {
    results +=
      chars[i] +
      (!vowelRegex.test(chars[i]) && /((?![^\-\s!\.\,\/\\\[\]\;\:\'\'\!]]).)/.test(chars[i])
        ? ''
        : chars[i]);
  }
  return results;
}
console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""
