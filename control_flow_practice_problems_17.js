/*
P:
Write a function that takes two arguments:

    a string to be split
    a delimiter character

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"

E:

D:
  Input = string to be split and another sting as delimiter
  Output = log each substring from str1 between the delimiters

A:
   - SET a flag to false to monitor when current char is the delimiter
   - ITERATE through str1
   - SET substring to ''
   - IF char equals delimiter, set flag to true.
     - log substring
     - continue
   - ELSE add char to substr, set flag to false
*/

function splitString(str, delimiter) {
  if (typeof delimiter == 'undefined') {
    console.log('ERROR: No delimiter');
    return;
  }
  let substring = '';
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (delimiter == '') {
      console.log(char);
      continue;
    }

    let isDelimiter;
    if (char === delimiter) {
      isDelimiter = true;
      console.log(substring);
      substring = '';
    } else {
      substring += char;
      isDelimiter = false;
    }
  }
  if(substring) {
    console.log(substring)
  }
}

// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter

// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString('hello', ';');
// logs:
// hello

console.log(
'---'
);

splitString(';hello;', ';');
console.log('---');
// logs:
//  (this is a blank line)
// hello