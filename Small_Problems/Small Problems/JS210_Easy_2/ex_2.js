/*
P:

Write a function that will take a short line of text, and write it to the console log within a box.

You may assume that the output will always fit in your browser window.

E:
Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

D:
  Input =
  Output =

A:
   - compute the message line: prepend a '/ ' and append a ' /'
   - SET row lenght to be the length of this row
   - rowLength - 2 times repeat '-'
   - 5 times iterate through, if 0 or 4 then add +'s
   - if 1 or 3 add \'s
   - if 2 log message line
*/

function logInBox(message) {
  let innerRowLength = message.length + 2;
  for (let index = 0; index < 5; index++) {
    switch (index) {
      case 2:
        console.log(`/ ${message} /`);
        break;
      case 0:
      case 4:
        console.log(`/${'-'.repeat(innerRowLength)}/`);
        break;
      default:
        console.log(`/${' '.repeat(innerRowLength)}/`);
        break;
    }
  }
}
logInBox('To boldly go...');
logInBox('');
