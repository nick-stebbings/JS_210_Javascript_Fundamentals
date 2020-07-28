/*
P:
Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

E:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

D:
  Input = str
  Output = str

A:
   -
   -
   -
   -
   -
   -
*/
const NUMBER_DICTIONARY = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function wordToDigit(sentence) {
  let mutatedStr = sentence;
  NUMBER_DICTIONARY.forEach((num, index) => {
    mutatedStr = mutatedStr.replace(new RegExp(num, 'g'), index.toString(10));
  });
  return mutatedStr;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));