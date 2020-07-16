/*
P:
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');      
E:

D:
  Input =
  Output =

A:
   - split on space
   - map each word
    - TO the concatenated results of the last char, middle elements and first char 
   - can use destructuring to do this?
   -
   -
*/
function swap(string) {
  let words = string.split` `;
  return words.map((w) => {
    let [firstChar, ...restChars] = [...w];
    let [lastChar, ...middleChars] = restChars.reverse();
    return [lastChar, ...middleChars.reverse(), firstChar].join``;
  }).join` `;
}
