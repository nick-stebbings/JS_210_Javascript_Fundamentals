/*
P:


Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

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

function merge(list1, list2) {
  let newList = [];
  list1 = list1.slice();
  list2 = list2.slice();
  while (list1.length > 0 && list2.length > 0) {
    list1[0] < list2[0] ? newList.push(list1.shift()) : newList.push(list2.shift());
  }
  return newList.concat(list1.length > list2.length ? list1 : list2);
}

console.log(merge([1, 5, 9], [2, 6, 8]));     // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));        // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));            // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

