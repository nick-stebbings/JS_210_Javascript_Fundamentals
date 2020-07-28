/*
P:
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

E:
let plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
D:
  Input = two strings
  Output = string

A:
   - map the keyword to alpha indices
   - iterate through the chars array
   - if alphabetic character, apply caesar character
   - increment keyword index
   - wrap around keyword index when it reaches the end
   - join back together

*/

    const ALPHA = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

function caesarEncrypt(test, shift) {
  if (shift % 26 == 0) {
    return test;
  } else {
    let cipher = {};
    let mappedChars = [...test].map((char) => {
      if (!char.match(/[A-Z]/i)) {
        return char;
      } else if (cipher[char] == undefined) {
        return (cipher[char] = /[a-z]/.test(char)
          ? translate(char).toLowerCase()
          : translate(char));
      } else {
        return cipher[char];
      }
    });
    function translate(char) {
      let charIndex = ALPHA.indexOf(char.toUpperCase());
      return ALPHA[(charIndex + shift) % 26];
    }
    return mappedChars.join``;
  }
}

function vigenereEncrypt(text, keyword) {
  let keywordIndices = [...keyword].map(char => ALPHA.indexOf(char.toUpperCase()));
  let keywordIndex = 0;
  let chars = [...text];
  let answer =[];

  for (let i = 0; i < chars.length; i++) {
    let currentChar = chars[i];
    if (!currentChar.match(/[A-Z]/i)) {
      answer.push(currentChar);
      continue;
    } else if (ALPHA.includes(currentChar)) {
      answer.push(caesarEncrypt(currentChar, keywordIndices[keywordIndex]));
    } else {
      answer.push(caesarEncrypt(currentChar, keywordIndices[keywordIndex]).toLowerCase());
    }
    if (keywordIndex++ >= keywordIndices.length - 1) {
      keywordIndex = keywordIndex % keywordIndices.length;
    }
  }
  return answer.join``;
}

let plaintext1 = "Pineapples don't go on pizzas!"

console.log(vigenereEncrypt(plaintext1, 'cab')); // Riogaqrlfu dpp't hq oo riabat!
console.log(vigenereEncrypt(plaintext1, 'A')); // Pineapples don't go on pizzas!
console.log(vigenereEncrypt(plaintext1, 'Aa')); // Pineapples don't go on pizzas!
console.log(vigenereEncrypt('Dog', 'Rabbit')); // Uoh