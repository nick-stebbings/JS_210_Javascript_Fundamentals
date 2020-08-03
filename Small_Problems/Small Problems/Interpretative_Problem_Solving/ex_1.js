/*
P:
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

Examples:

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

E:

D:
  Input = number
  Output = array

A:
  - SET an array of n '0's
   - n times DO..
     - iterate through the array
     - IF the index of the element divides evenly by n, invert the element
   - mutate the array, mapping to index if the element is 1
   - reject all 0's from the array and return

    RECURSIVE
    - if n == 0, return array mapped to index*el, with 0's removed
    - else do one run through of the array, then pass the result to a recursive call with n-1
    - This doesn't work as by decrementing n you also mess up the number that you need to alternate switches with! Might not be possble, or maybe possible with a memo, as you could use memo.length - n
*/

function lightsOn(n) {
  let lightsAry = [-1].concat([...'0'.repeat(n)].map( l => +l ));
  for (let i = 1; i <= n; i++) {
    lightsAry.forEach((light, index) => {
      lightsAry[index] = (index % i == 0 ? 1 - light : light);
    })
  }
  return lightsAry.map((l, idx) => l * idx).filter(l => l > 0);
}
console.log(lightsOn(5));
console.log(lightsOn(100));