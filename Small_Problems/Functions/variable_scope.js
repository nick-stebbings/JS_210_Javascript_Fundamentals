function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// This will log 'This is global', due to the lack of variable initialisation on line 2 (it is just assigned). Javascript's compiler treats this as a global variable except it is not delete-able.