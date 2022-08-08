function makeCounter() {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
}

const counter = makeCounter(); // privateCounter === 0
counter.increment(); // privateCounter === 1
counter.increment(); // privateCounter === 2
counter.increment(); // privateCounter === 3
counter.decrement(); // privateCounter === 2
console.log(counter.value()); // 2
