function average(args) {
  return sum(args) / args.length;
}
// console.log(average(1,2,3));

function sum(args) {
  let total = 0;
  for (let index = 0; index < args.length; index++) {
    total += args[index];
  }
  return total;
}
// console.log(average(1,2,3,4,5));

let temps = [31,23,-34,12,13,12]

console.log(average(temps));
