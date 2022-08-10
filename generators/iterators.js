/*
 * Standard Iterator
 */
var something = (function () {
  var nextVal;

  return {
    // Needed for `for..of` loops
    // For..of expects something to be iterable, so it looks for and calls its Symbol.iterator function.
    [Symbol.iterator]: function () {
      return this;
    },

    // Standard iterator interface method
    next: function () {
      nextVal = nextVal === undefined ? 1 : 3 * nextVal + 6;

      return { done: false, value: nextVal };
    },
  };
})();

something.next().value; // 1
something.next().value; // 9
something.next().value; // 33

// For..of automatically calls next() for each iteration
for (var v of something) {
  console.log(v);

  // don't let the loop run forever!
  if (v > 500) {
    break;
  }
} // 105 321 969

/*
 * Iterables
 */
var a = [1, 3, 5, 7, 9];

var it = a[Symbol.iterator]();

it.next().value; // 1
it.next().value; // 3
it.next().value; // 5

/*
 * Generator Iterator
 */
function* something2() {
  try {
    var nextVal;

    while (true) {
      nextVal = nextVal === undefined ? 1 : 3 * nextVal + 6;

      yield nextVal;
    }
  } finally {
    // cleanup clause
    console.log("cleaning up!");
  }
}

var it = something2();

for (var v of it) {
  console.log(v);

  if (v > 500) {
    console.log(
      // Complete the generator's iterator
      it.return("Hello World").value
    );
    // No break needed here
  }
}
// 1 9 33 105 321 696
// cleaning up!
// Hello World
