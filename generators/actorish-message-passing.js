// Source: https://observablehq.com/@anjana/the-power-of-js-generators
// Generators can function as COROUTINES
// Passing control back and forth to COOPERATE

let players = {};
let queue = [];

players.asker = asker();
players.knocker = knocker();
send("asker", "Asker get ready...");
send("knocker", "Knocker go!");
run();

function run() {
  while (queue.length) {
    let [name, message] = queue.shift();
    players[name].next(message);
  }
}

function send(name, message) {
  console.log(message);
  queue.push([name, message]);
}

function* knocker() {
  send("asker", "Knock knock");
  let question = yield;
  if (question !== "Who's there?") return;
  send("asker", "Gene");
  question = yield;
  if (question !== "Gene who?") return;
  send("asker", "Generator!");
}

function* asker() {
  let knock = yield;
  if (knock !== "Knock knock") return;
  send("knocker", "Who's there?");
  let answer = yield;
  send("knocker", `${answer} who?`);
}
