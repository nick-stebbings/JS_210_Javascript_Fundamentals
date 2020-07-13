/*
P:
Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

Implicit rules:
  ASCII string value = the sum of the ASCII character codes of the letters in the string

Examples:

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

E:

D:
  Input = str
  Output = int

A:
   - SPLIT the string into chars
   - MAP the split string array to the ASCII code for each element in the array
   - REDUCE the array adding the elements together
   -
   -
   -
*/

function asciiValue(str) {
  if (str == '') return 0;
  return str.split``.map( c => c.charCodeAt(0) ).reduce( (val, total) => val + total );
}
