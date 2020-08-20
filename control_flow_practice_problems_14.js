/*
P:
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

    The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

    The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

Rules:
-  Both functions return -1 if firstString does not contain the substring specified by secondString.
-  You may use
      - the square brackets ([]) to access a character by index (as shown below), 
      - and the length property to find the string length. 
  - However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"

D:
  Input = two strings
  Output = number

A: #indexOf
   - /iterate through firstString until you find the first char match
  - /SET candidateIndex as its index
    - from candidateIndex, iterate through for (secondstring length -1) more chars, comparing each character
      - CONTINUE if you reach a letter that doesn't match
      - else return candidateIndex
  - if first char match not found return -1

A: #lastIndexOf
   - Like above, except you need to start iterating from (secondstring length) from the end of firststring,
    - iterate backwards with your loop
   - if you never (find the first char and the subloop completes), then return -1
*/

function indexOf(firstString, secondString) {
  firstCharLoop:
  for (let charIndex = 0; charIndex < firstString.length; charIndex++) {
    const currentChar = firstString[charIndex];

    if (currentChar == secondString[0]) { /* First character matches */
      for (let j = 1; j <= secondString.length - 1; j++) {
        const nextTestChar = secondString[j];
        if (nextTestChar !== firstString[charIndex + j]) continue firstCharLoop;
      }
      return charIndex;
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  const lastPossibleFirstCharIndex = firstString.length - secondString.length;
  firstCharLoop:
  for (let charIndex = lastPossibleFirstCharIndex; charIndex >= 0; charIndex--) {
    const currentChar = firstString[charIndex];

    if (currentChar == secondString[0]) {
      /* First character matches */
      for (let j = 1; j <= secondString.length - 1; j++) {
        const nextTestChar = secondString[j];
        if (nextTestChar !== firstString[charIndex + j]) continue firstCharLoop;
      }
      return charIndex;
    }
  }
  return -1;
}
console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1
console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1