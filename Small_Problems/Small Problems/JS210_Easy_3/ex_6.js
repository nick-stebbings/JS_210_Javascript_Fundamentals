/*
P:
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

E:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

D:
  Input =
  Output =

A:
   - coerce to string
   - take first half
   - return boolean result of comparing with second half, split reversed and joined
   -
   -
   -
*/

function isPalindromicNumber(num) {
  let strNumber = String(num);
  let middle = Math.ceil(strNumber.length / 2);
  let isOddLength = strNumber.length % 2 == 0;
  return (
    (isOddLength ? strNumber.slice(0, middle) : strNumber.slice(0, middle - 1)) ===
    [...strNumber.slice(middle)].reverse().join``
  );
}
