/*
P:
Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"

E:

D:
  Input = two strings
  Output = boolean

A:
   - iterate through chars in string and chars in searchString
   - if two chars are not the same return false
   - return true
   -
   -
   -
*/

function startsWith(string, searchString) {
  for (let i = 0; i < searchString.length; i++) {
    const stringChar = string[i];
    const searchStringChar = searchString[i];
    if (stringChar != searchStringChar) return false;
  }
  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));            // true
console.log(startsWith(str, 'We put'));        // true
console.log(startsWith(str, ''));              // true
console.log(startsWith(str, 'put'));           // false
console.log(startsWith(str, ''));           // true
console.log(startsWith(str, 'We put comprehension and mastery above all else too'));           // false