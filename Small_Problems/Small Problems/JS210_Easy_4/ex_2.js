/*
P:

Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]


E:

D:
  Input =
  Output =

A:
   - Iterate through each array, pushing to results array if the results array does not already include the value.
   -
   -
   -
   -
   -
*/
function union(...args) {
  let results = [];
  for (let ary of args) {
    for (let val of ary) {
      if (!results.includes(val)) {
        results.push(val);
      }
    }
  }
  return results;
}
