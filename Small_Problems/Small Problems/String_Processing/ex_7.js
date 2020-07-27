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
   


Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

Examples:

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"





*/

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));

function staggeredCase(str) {
  let toggle = false;
  let indexCount = 0;
  return str.split``.map((c, idx) => {
    if (c.match(/[^a-z]/i)) {
      toggle = false;
    } else {
      toggle = true;
    }
    if (toggle) {
      indexCount++;
      return indexCount % 2 != 0 ? c.toUpperCase() : c.toLowerCase();
    }
    return c;
  }).join``;
}
