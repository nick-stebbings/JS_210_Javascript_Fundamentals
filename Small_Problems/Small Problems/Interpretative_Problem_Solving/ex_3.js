/*
P:
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Examples:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

E:

D:
  Input = strng
  Output = boolean

A:
   - split the word into chars, upcase
   - iterate through the chars
   - if a letter exists in the keys/value of the dict const
   - then if the remaining substring contains the other val
   - return false
   - return true at end
*/

function isBlockWord(str) {
  let remainingBlocks = [
    'BO',
    'XK',
    'DQ',
    'CP',
    'NA',
    'GT',
    'RE',
    'FS',
    'JW',
    'HU',
    'VI',
    'LY',
    'ZM',
  ];
  let prohibitedLetters = '';
  let chars = [...str.toUpperCase()];
  for (let char of chars) {
    if (prohibitedLetters.includes(char)) {
      return false;
    }
    for (const block of remainingBlocks) {
      if (block.includes(char)) {
        prohibitedLetters += remainingBlocks.splice(remainingBlocks.indexOf(block), 1);
      }
    }
  }
  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('floW')); // true
console.log(isBlockWord('APPLE')); // false
console.log(isBlockWord('apple')); // false
console.log(isBlockWord('apPLE')); // false
console.log(isBlockWord('Box')); // false
