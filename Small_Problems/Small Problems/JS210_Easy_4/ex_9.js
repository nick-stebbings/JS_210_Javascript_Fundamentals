/*
P:

E:

D:
  Input =
  Output =

A:
   - reduce the array as a product
   -
   - divide by array length
   -
   -
   -
   






Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

Example:
*/
const vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

function countOccurrences(arr) {
  let counts = {};
  arr.forEach((el) => {
    if (counts[el] != undefined) {
      counts[el]++;
    } else {
      counts[el] = 1;
    }
  });
  return counts;
}
console.log(countOccurrences(vehicles));
// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
