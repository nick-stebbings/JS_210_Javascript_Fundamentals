// P:
// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// E:

/*


D:
Input = two strings
  Output = string
  
  A:
  -
  -
  -
  -
  -
  -
  */
function shortLongShort(str1, str2) {
  let answerString = '';
  answerString = str1.length > str2.length ? str2 + str1 + str2 : str1 + str2 + str1;
  return answerString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort("", "xyz"));         // "xyz"
