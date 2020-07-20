/*
P:

E:

D:
  Input =
  Output =

A:
   - reduce the array as a product
   -
   - divide by array length
   -
   -
   -
   




Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

Examples:
*/

function digitList(num) {
  return [...String(num)].map((el) => +el);
}
digitList(12345); // [1, 2, 3, 4, 5]
digitList(7); // [7]
digitList(375290); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]
