// Source: https://observablehq.com/@anjana/the-power-of-js-generators
// yield is a two-way street
function* listener() {
  console.log("listening...");
  while (true) {
    let message = yield;
    console.log("heard:", message);
  }
}

let l = listener();
l.next("Are you there?"); // listening...
l.next("How about now?"); // heard: How about now?
l.next("blah blah"); // heard: blah blah
