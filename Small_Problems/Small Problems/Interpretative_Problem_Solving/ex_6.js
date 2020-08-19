/*
P:
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Examples:

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

E:

D:
  Input = number, odd, >=7
  Output = log a start

A:
   - repeat a '*' n times for the middle row
   - SET a top array, elements are:
    - (n-1)/2 times repeat 3 *s
    - MAP this array
     - FOREACH row, splice its chars array
       - after element 1 add (2 - idx) spaces ' '
    - log this array
    - log the middle line
   - copy and reverse this array, log it
*/

function star(n) {
  let middle = '*'.repeat(n);
  let topLength = ((n-1) / 2);
  let rows = [];
  for (let i = 1; i <= topLength; i++) {
    let row = [...'***'];
    let gap = ' '.repeat(topLength - i);
      row.splice(1, 0, gap);
      row.splice(-1, 0, gap);
      rows.push(row.join``.padStart(row.join``.length + i - 1, ' '));
    }
  console.log(rows.join("\n"));
  console.log(middle);
  console.log(rows.reverse().join("\n"));
}
star(5);
star(7);
star(9);