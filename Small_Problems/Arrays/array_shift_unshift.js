// The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

// Examples:
/*
P:
 - write a function that removes (shift) or adds on an element to/from the front of an array, mutating the array in place
E:

D:
  Input =
  Output =

A:
   - GUARD if array is empty, return undefined
   -
   -
   -
   -
   -
*/

function shift(ary) {
  if (ary === []) { return }
  else {
    return ary.splice(0, 1)[0]
  }
}

function unshift(ary, ...args) {
  args.forEach((obj) => {
    ary.splice(0, 0, obj);
  });
  return ary.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log( shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
