/*
P:


Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

E:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

D:
  Input = string
  Output = string

A:
   - SET rlsync object
   - SET answer to rlsync question
   - IF answer ends with !
   - THEN return uppercase string interp
   - ELSE return string interp
*/

function shouty() {
  const rlSync = require('readline-sync');
  let answer = rlSync.question('What is your name?\n');
  let answerString = `Hello ${answer.slice(0, -1)}.`;

  if (answer.slice(-1) == '!') {
    answerString = answerString.toUpperCase() + ' WHY ARE WE SCREAMING?'
  }
  return answerString;
}
