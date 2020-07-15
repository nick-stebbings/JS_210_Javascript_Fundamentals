/*
P:

Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

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

function double(string) {
  //Extra
  let doubledArray = string.split``.map((char, index) => {
    return index % 2 == 0 ? `${char}${char}` : char;
  });
  return doubledArray.join('');
}

function crunch(string) {
  const regex = /([a-z])\1/gi;
  return string.replace(regex, '$1');
}
crunch('ddaaiillyy ddoouubbllee'); // "daily double"
crunch('4444abcabccba'); // "4abcabcba"
crunch('ggggggggggggggg'); // "g"
crunch('a'); // "a"
crunch(''); // ""
