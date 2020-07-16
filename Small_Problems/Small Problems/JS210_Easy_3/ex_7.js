/*
P:
Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

E:

D:
  Input =
  Output =

A:
   - map the array to
    - the sum of the elements preceding it (including it) in the array
   - do this by reducing the sliced array from 0 up to index+1 of the mapped element
   -
   -
   -
*/

function runningTotal(arr) {
  return arr.map((el, idx) => arr.slice(0, idx + 1).reduce((sum, number) => sum + number));
}
