// P

// The invoiceTotal function in the code below computes the total amount for an invoice containing four "line items". How can you refactor the function so that it will work with invoices containing any number of line items?

// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }
function invoiceTotal(...args) {
  return args.reduce((count, el) => count + el);
}

console.log(invoiceTotal(20, 30, 40, 50)); // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40)); // does not work; how can you make it work?
