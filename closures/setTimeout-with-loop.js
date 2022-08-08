const values = [...Array(5).keys()]; // [0, 1, 2, 3, 4]

// With var
for (var i = 0; i < values.length; i++) {
  setTimeout(function () {
    console.log("with var", i);
  }, i * 1000);
} // 5 5 5 5 5

// With let
for (let i = 0; i < values.length; i++) {
  setTimeout(function () {
    console.log("with let", i);
  }, i * 1000);
} // 0 1 2 3 4

// With var and closures
for (var i = 0; i < values.length; i++) {
  function closure(i) {
    setTimeout(function () {
      console.log("with var and closures", i);
    }, i * 1000);
  }

  closure(i);
} // 0 1 2 3 4
