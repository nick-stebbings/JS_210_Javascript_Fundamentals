// Identify the bug in the following code. Don't run the code until after you've tried to answer.

// Answer = The first property name in the list is using a string but it is not quoted. This is ok but it must be quoted in the object reference.

const myObject = {
  a: 'name',
  b: 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
console.log(myObject['a']);
myObject;
