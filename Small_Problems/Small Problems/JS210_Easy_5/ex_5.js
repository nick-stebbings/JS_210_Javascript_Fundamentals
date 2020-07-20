/*
P:


Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

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

function negative(num) {
  return Math.sign(num) * -num;
}

negative(5); // -5
negative(-3); // -3
negative(0); // -0
