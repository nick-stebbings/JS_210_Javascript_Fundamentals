/*
P:

Practice Problem: Comparing Arrays

In the last assignment, we saw that JavaScript's equality operators don't examine the values in the arrays—instead, they check that the arrays are the same object. It's more likely that you'll want to know whether two arrays contain the same values. To do this, you need to write your own function.

Write a function named arraysEqual that takes two arrays as arguments. The function should return true if the arrays contain the same values, or false if they do not.

Test the function with arrays that contain number, string, and boolean values. Don't worry about handling arrays that contain other Arrays or Objects.
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
function arraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] != arr1[i]) return false;
  }
  return true;
}
console.log(arraysEqual([1,2,3], [1,2,3]));
console.log(arraysEqual([3,2,3], [1,2,3]));
console.log(arraysEqual([1,2,3, 4], [1,2,3]));