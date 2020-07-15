// Answer: Line 13 declares and initialises a new constant to the string value '456'
// Line 14 reassigns the property with name 'prop2' to the same string value.
// Line 15 tries assigns the property with name (what variable prop2 evaluates to) which is '456' to string '678'.
//  Line 17 will log '678'
// Line 18 will log '456'

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);
