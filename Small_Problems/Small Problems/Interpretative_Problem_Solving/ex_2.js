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

diamond(9);
diamond(5);
diamond(71);
diamond(2);
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
  function buildTop(n, padWidth = 1) {
    if (n == 1) {
      return ['*'];
    } else {
      return [
        buildTop(n - 2, padWidth + 1)
          .map((line, idx) => line.padStart(n + padWidth - 1, ' '))
          .join('N'),
      ].concat(['*'.repeat(n).padStart(n + 1, ' ')]);
    }
  }
  if (n % 2 == 0) {
    console.log('Invalid input!');
    return
  }
  let [top, middle] = buildTop(n);
  if (n > 3) {
    top = top.slice(1); /* Stop off by 1 error with padding */
  }
  console.log(top.replace(/N/g, '\n'));
  console.log(middle);
  console.log(top.split('N').reverse().join('\n'));
}
