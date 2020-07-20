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
   



Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

Examples:

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


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

function palindromes(str) {
  return [].concat
    .apply([], substrings(str))
    .filter((substr) => isPalindrome(substr) && substr.length > 1);
}

function isPalindrome(str) {
  return str.split('').reverse().join`` === str;
}

console.log(palindromes('knitting cassettes'));
console.log(palindromes('abcde'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
