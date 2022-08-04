function counter() {
  let count = 0;
  let staleMessage = `Stale counter value: ${count}`; // stale closures

  return function () {
    let message = `Counter value: ${count}`;

    return [count++, staleMessage, message];
  };
}

let myCounter = counter(); // undefined
console.log(myCounter()); // [0, 'State counter value: 0', 'Counter value: 0']
console.log(myCounter()); // [1, 'State counter value: 0', 'Counter value: 1']
console.log(myCounter()); // [2, 'State counter value: 0', 'Counter value: 2']
console.log(myCounter()); // [3, 'State counter value: 0', 'Counter value: 3']
