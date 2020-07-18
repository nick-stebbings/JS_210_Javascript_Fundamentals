/*
P:


Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

Example:



E:

D:
Input =
Output =

A:
- loop through from 0 to length - 1
- push elements from each input array to the results array
-
-
   -
   -
   */
function interleave(arr1, arr2) {
  let results = [];
  for (let i = 0; i < arr1.length; i++) {
    results.push(arr1[i]);
    results.push(arr2[i]);
  }
  return results;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
