// The splice function changes the contents of an array by deleting existing elements and/or adding new elements.
// The function takes the following arguments:
//  - an array, a start index, a deleteCount, and zero or more elements to be added.

// The function removes deleteCount number of elements from the array, beginning at the start index. If any optional element arguments are provided, splice inserts them into the array beginning at the start index. The function returns a new array containing the deleted elements, or an empty array ([]) if no elements are deleted. splice mutates the original array.

// Additional specifications:

// slice:
// The slice function takes three arguments: an array, and two integers representing a begin and an end index. The function returns a new array containing the extracted elements starting from begin up to but not including end. slice does not mutate the original array.
//     The values of begin and end will always be integers greater than or equal to 0.
//     If the value of begin or end is greater than the length of the array, set it to equal the length.

// splice:

//     The values of start and deleteCount will always be integers greater than or equal to 0.
//     //If the value of start is greater than the length of the array, set it to equal the length.
//     If the value of deleteCount is greater than the number of elements from start up to the end of the array, set deleteCount to the difference between the array's length and start.
//     Takes optional arguments for elements to add to the array; denoted by the parameters element1 up to elementN. If no elements to add are provided, splice only removes elements from the array.

// Examples:

//
//  Alg:
//  1 - remove a portion of the array, mutating it
//   - SET the start to be required amount
//  2 - IF objects are provided, insert them in the same place
//   - SET the deleteCount to be required amount
//     - IF > num elements from start --> end of ary
//     - i.e. IF ary.length - 1 - start < deleteCount
//  3 - return the elements removed
function splice(array, start, deleteCount, ...objects) {
  let results = [];
  deleteCount = Math.min(array.length - 1 - start, deleteCount);
  start = Math.min(array.length, start);
  let beginningOfArray = array.slice(0, start);
  for (let index = 0; index < deleteCount; index++) {
    results.unshift(array.shift());
    console.log('results array is:', results);
  }
  if (objects) {
    for (const obj of objects) {
      array.unshift(obj);
    }
  }
  for (const obj of beginningOfArray) {
    array.unshift(obj);
  }

  return results;
}

console.log(splice([1, 2, 3], 1, 2)); // [2, 3]
console.log(splice([1, 2, 3], 1, 3)); // [2, 3]
console.log(splice([1, 2, 3], 1, 0)); // []
console.log(splice([1, 2, 3], 0, 1)); // [1]
console.log(splice([1, 2, 3], 1, 0, "a")); // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, "two")); // [2]
console.log(arr2); // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, "two", "three")); // [2, 3]
console.log(arr3); // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0)); // []
console.log(splice(arr4, 1, 0, "a")); // []
console.log(arr4); // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, "a"); // []
arr5; // ["a", 1, 2, 3]