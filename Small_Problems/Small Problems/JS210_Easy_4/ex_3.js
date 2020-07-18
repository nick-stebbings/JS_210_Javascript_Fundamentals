/*
P:

Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Examples:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


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
function halvesies(ary) {
  if (!ary) {
    return [[], []];
  }
  let middlePoint = Math.floor(ary.length / 2);
  let slicePoint = ary.length % 2 == 0 ? middlePoint : middlePoint + 1;
  return [ary.slice(0, slicePoint), ary.slice(slicePoint)];
}
