// Source: https://observablehq.com/@anjana/the-power-of-js-generators
// Generators remember state
// State machines
function* bankAccount() {
  let balance = 0;

  while (balance >= 0) {
    balance += yield balance;
  }

  return "Bankrupt!";
}

const myAccount = bankAccount();
myAccount.next(50); // {value: 0, done: false}
myAccount.next(50); // {value: 50, done: false}
myAccount.next(-10); // {value: 40, done: false}
myAccount.next(-60); // {value: "bankrupt!", done: true}
