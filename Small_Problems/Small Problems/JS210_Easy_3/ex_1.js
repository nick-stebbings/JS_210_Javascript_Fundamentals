/*
P:
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

E:
Teddy is 69 years old!

D:
  Input =
  Output =

A:
   - generate a random number between 0.1 and 1 inclusive
   - set the minimum to be 20
   - set the max to be 200
    - multiply the random number by (max - min + 1) + min
   - return the floor of this number
   -
   -
*/
function teddyAge(min = 20, max = 200) {
  let smallRand = Math.random();
  let multiplier = max - min + 1;
  return Math.floor(smallRand * multiplier) + min;
}

console.log(teddyAge());
