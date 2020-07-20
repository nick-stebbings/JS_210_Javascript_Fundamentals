/*
P:

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
   



Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

Examples:
*/
console.log(sumOfSums([1, 5, 7, 3])); // 36
console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

function sumOfSums(arr) {
  return arr
    .map((el, idx) => {
      let innerSum = 0;
      for (let i = 0; i < idx + 1; i++) {
        innerSum += arr[i];
      }
      return innerSum;
    })
    .reduce((sum, el) => sum + el);
}
