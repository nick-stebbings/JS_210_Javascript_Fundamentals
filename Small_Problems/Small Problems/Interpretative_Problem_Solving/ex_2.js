/*
P:
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

D:
  Input = number
  Output = log a diamond

A:
   - IMPLICIT raise argument error if number is even 
   -
   -
   - PAD each row with (n - rowlength)/2 spaces
   -
   -
*/
diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function diamond(n) {
  if (n == 1) {
    console.log('*'); 
  }
  return [diamond(n - 2)].concat(['*'.repeat(n)]);
}
