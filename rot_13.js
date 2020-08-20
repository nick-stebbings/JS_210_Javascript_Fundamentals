/*
P:
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

For each character in the original String:

    If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
    Letter transformations preserve case. A becomes N while a becomes n.
    Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

It's worth noting that rot13 applied twice results in the original string:

This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.
E:

D:
  Input = string
  Output = string

A:
   - Iterate through the string
   - FOREACH character, map it to :
    - if its charcode is between (65, 77 inclusive || 97, 109) add 13 and return char from charcode
    - if its charcode is between (78, 90 inclusive || 110, 122) subtract 13 and return char from charcode
   - ELSE return the char itself
*/

function rot13(string) {
  return [...string].map( char => {
    let asciiCode = char.charCodeAt(0);
    switch (true) {
      case (asciiCode >= 65 && asciiCode <= 77) || (asciiCode >= 97 && asciiCode <= 109):
        return String.fromCharCode(asciiCode + 13);
      case (asciiCode >= 78 && asciiCode <= 90) || (asciiCode >= 110 && asciiCode <= 122):
        return String.fromCharCode(asciiCode - 13);
      default:
        return char;
    } 
  }).join``
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.


console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
