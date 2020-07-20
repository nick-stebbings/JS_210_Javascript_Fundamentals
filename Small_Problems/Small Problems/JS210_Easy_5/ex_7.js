/*
P:




Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Examples:

swapName('Joe Roberts');    // "Roberts, Joe"



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

function swapName(str) {
  let [fName, sName] = str.split(' ');
  return `${sName}, ${fName}`;
}
// "Roberts, Joe"
console.log(swapName('Joe Roberts'));
