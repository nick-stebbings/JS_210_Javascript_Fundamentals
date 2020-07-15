/*
P:


Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

E:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********



D:
  Input = integer
  Output = return nothing, log a series of lines of asterisks, as above

A:
   - LOOP from 0 to n-1
   - FOREACH i in the loop, unshift i *'s onto an array
   - unshift n-1 times ' ' on the array
   - log the array
   -
   -
*/

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    const row = [];

    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        row.unshift('*');
      } else {
        row.unshift(' ');
      }
    }
    console.log(row.join``);
  }
}
triangle(4);
triangle(5);
triangle(1);
