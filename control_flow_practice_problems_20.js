/*
P:
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. 
 - You can use the String.fromCharCode and the String.charCodeAt methods for these operations. For example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
let asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.
E:

D:
  Input = string
  Output = string

A:
   -
   -
   -
   -
   -
   -
*/

function toLowerCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    let asciiCode = char.charCodeAt(0);
    if (asciiCode < 91 && asciiCode > 64) {
      let newAsciiCode = asciiCode + 32;
      result += String.fromCharCode(newAsciiCode);
    } else {
      result += char;
    }
  }
  return result;
}

console.log(toLowerCase('ALPHABET'));     // "alphabet"
console.log(toLowerCase('123'));          // "123"
console.log(toLowerCase('abcDEF'));       // "abcdef"
