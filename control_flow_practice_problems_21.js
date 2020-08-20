/*
P:
Write a function that returns a substring of a string based on a starting index and length.

    The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
    The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.

E:

D:
  Input = string, starting index (num), length (num)
  Output = string

A:
   -
   -
   -
   -
   -
   -
*/

function substr(string, start, length) {
  start = (start < 0 ? string.length + start : start);
  let end = Math.min(string.length, start + length);
  let result = '';

  for (let i = start; i < end; i++) {
    const char = string[i];
    result += char;  
  }
  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""