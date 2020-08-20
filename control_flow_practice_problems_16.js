/*
P:
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

RULES: - You may use the square brackets ([]) to access a character by index (as shown below), 
       - and the length property to find the string length. 
    - However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];       // "h"
'hello'[4];       // "o"

E:
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

D:
  Input = str
  Output = str

A:
   - iterate through the chars in the string, continuing if the char is a space.
   - when it hits a non-space char, set endStartTrim = true;
   - while endStartTrim, add chars to a results string
   - once results string is formed, do the same thing backwards
   -
   -
*/
function trimLeft(str) {
  let copy = false;
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (copy) {
      result += char;
    } else {
      let blankChar = char === ' '
      copy = !blankChar
      if (copy) { result = char }
    }
  }
  return result;
}
function trimRight(str) {
  let copy = false;
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (char !== ' ') {
      copy = true;
    }
    
    if (copy) {
      result = char + result;
    }
  }
  return result;
}

function trim(str) {
  return trimLeft(trimRight(str));
}
console.log(trim('    tgew  '));
console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""