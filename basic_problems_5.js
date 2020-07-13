function parser(str) {
  const DIGITS = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  };
  let count = 0;
  let digits = str.split``.map((chr) => Number(chr));

  for (let i = 0; i < digits.length; i++) {
    count += digits.reverse()[i] * 10 ** i;
  }
  return count;
}
console.log(parser('123'));
