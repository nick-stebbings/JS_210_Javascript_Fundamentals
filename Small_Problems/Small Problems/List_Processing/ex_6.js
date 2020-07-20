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
   



Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]



*/

function leadingSubstrings(str) {
  return [...str].map((el, idx) => {
    let innerSubstr = '';
    for (let i = 0; i < idx + 1; i++) {
      innerSubstr += [...str][i];
    }
    return innerSubstr;
  });
}

function substrings(str) {
  let results = [];
  [...str].forEach((char, idx) => {
    results.push(leadingSubstrings([...str].slice(idx).join``));
  });
  return results;
}
console.log(substrings('abcde'));
