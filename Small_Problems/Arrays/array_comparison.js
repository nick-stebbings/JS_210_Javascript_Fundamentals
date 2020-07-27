/*
P:


The array comparison function that we implemented in the Arrays lesson (Alternate link if the previous link doesn't work) implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

Examples:


E:

D:
  Input =
  Output =

A:
   - sort the arrays and compare by element
   -
   -
   -
   -
   -
*/

function areArraysEqual(array1, array2) {
  if (typeof array1 != 'object' || typeof array2 != 'object' || array1.length != array2.length) {
    return false;
  }
  let sortedArray1 = array1
    .map((el) => (typeof el === 'string' ? el.charCodeAt(0) : el))
    .sort((a, b) => a - b);
  let sortedArray2 = array2
    .map((el) => (typeof el === 'string' ? el.charCodeAt(0) : el))
    .sort((a, b) => a - b);
  for (let i = 0; i < array1.length; i++) {
    const element1 = sortedArray1[i];
    const element2 = sortedArray2[i];

    if (element1 !== element2) {
      return false;
    }
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // true
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])); // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a'])); // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3])); // false
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])); // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])); // false
console.log(areArraysEqual([1, 1, 1], [1, 1])); // false
console.log(areArraysEqual([1, 1], [1, 1])); // true
