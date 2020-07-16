/*
P:


Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples:

isPalindrome2('madam');               // true
isPalindrome2('Madam');               // true (case does not matter)
isPalindrome2("Madam, I'm Adam");     // true (only alphanumerics matter)
isPalindrome2('356653');              // true
isPalindrome2('356a653');             // true
isPalindrome2('123ab321');            // false


E:

D:
  Input =
  Output =

A:
   -
   -
   -
   -
   -
   -
*/
function isPalindrome(str) {
  return [...str].reverse().join`` === str;
}
function isPalindrome2(str) {
  let sanitisedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(sanitisedString);
}
