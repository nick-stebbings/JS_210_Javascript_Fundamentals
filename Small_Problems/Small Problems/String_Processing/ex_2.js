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
   



Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

Examples:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


*/
function removeVowels(ary) {
  return ary.map((str) => str.replace(/[aeiou]/gi, ''));
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));
