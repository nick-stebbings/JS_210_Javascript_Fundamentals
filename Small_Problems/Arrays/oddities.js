/*
P:

Oddities

The oddities function takes an array as an argument and returns a new array containing every other element from the input array. The values in the returned array are the first (index 0), third, fifth, and so on, elements of the input array. The program below uses the array returned by oddities as part of a comparison. Can you explain the results of these comparisons?

Examples:


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

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6]) === [2, 4, 6]); // false
console.log(oddities(['abc', 'def']) === ['abc']); // false
// Answer: Array comparison using the strict equality operator does not automatically compare values and so only 'the same array' will return true.
let a = [1, 2, 3];
console.log(a === a);
let returnedArray = oddities(a);
console.log([1, 3] === returnedArray);
