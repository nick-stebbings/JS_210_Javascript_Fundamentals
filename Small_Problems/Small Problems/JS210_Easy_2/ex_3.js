/*
P:
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

E:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

D:
  Input =
  Output =

A:
   - GUARD clause return empty string for empty string
   - SET a resultString to '1'
   - SET halfLen to (floor of length/2)
   - IF length of string is odd, add halfLen times '01' and return
   - ELSE add halfLen - 1 times '01' and '0', then return
   -
*/

function stringy(str) {
  if (!str) {
    return str;
  }
  let baseLength = str.length - 1;
  let results = '1';

  results =
    baseLength % 2 == 0
      ? results.concat('01'.repeat(baseLength / 2))
      : results.concat('01'.repeat((baseLength - 1) / 2), '0');
  return results;
}
