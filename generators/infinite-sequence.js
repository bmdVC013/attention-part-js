// Source: https://observablehq.com/@anjana/the-power-of-js-generators
function* infinityAndBeyond() {
  let i = 1;

  while (true) {
    yield i++;
  }
}

function* take(n, iterable) {
  for (let item of iterable) {
    if (n <= 0) return;
    n--;
    yield item;
  }
}

const taken = [...take(5, infinityAndBeyond())]; // [1, 2, 3, 4, 5]

function* map(iterable, mapFn) {
  for (let item of iterable) {
    yield mapFn(item);
  }
}

const squares = [
  ...take(
    9,
    map(infinityAndBeyond(), (x) => x * x)
  ),
]; // [1, 4, 9, 16, 25, 36, 49, 64, 81]
