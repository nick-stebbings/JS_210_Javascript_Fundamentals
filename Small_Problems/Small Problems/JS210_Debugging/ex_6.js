// Figure out why not and fix the code so that it works as expected. You may also consider writing a few more test cases to insure that the input validation requirement is properly met.

const memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return /^[a-z]+ [a-z]+$/i.test(name);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223'); //valid
addMember('Rachel Garcia', '232-1191'); //valid

addMember('Earl 5mith', '331-9191'); //invalid
addMember('Madonna', '331-9191'); //invalid
addMember('the pope', '331-9191'); //valid
addMember('pope john paul ii', '331-9191'); //invalid
addMember('Earl Smith', '3321-9191'); //invalid
addMember('Earl Smith', '331-191'); //invalid
addMember('Earl Smith', '331a-9191'); //invalid
addMember('Earl Smith', '331-!9191'); //invalid
addMember('Earl Smith', ''); //invalid
addMember('', '244-1442'); //invalid
addMember([], '244-1442'); //invalid

console.log(memberDirectory);
