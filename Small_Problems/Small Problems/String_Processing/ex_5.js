/*
P:

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
   
Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Examples:

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"


*/
function swapCase(str) {
  return [...str].map((c) => swapCharCase(c)).join``;
}

function swapCharCase(c) {
  return /[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase();
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
