/*
P:


Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]


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

function sequence(num) {
  let seq = [];

  for (let i = 1; i <= num; i++) {
    seq.push(i);
  }
  return seq;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
