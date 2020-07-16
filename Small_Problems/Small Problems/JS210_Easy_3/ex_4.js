/*
P:
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards.
-  For this problem, the case matters and 
 - all characters matter.

Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

E:

D:
  Input =
  Output =

A:
   - destructure the string
   - reverse it
   - join it
   - compare it to the original
   -
   -
*/
function isPalindrome(str) {
  return [...str].reverse().join`` === str;
}
