// Source: https://observablehq.com/@anjana/the-power-of-js-generators

// Callstack limit error
// function ping(n) {
//   console.log("ping", n);
//   return pong(n + 1);
// }

// function pong(n) {
//   console.log("pong", n);
//   return ping(n + 1);
// }

// ping(0);
// ping 0
// pong 1
// ...
// ping 27210
// pong 27211
// InternalError: too much recursion

// Avoid callstack limit with yield
let players = {};
let queue = [];

function* ping() {
  let n;

  while (true) {
    n = yield;
    console.log("ping", n);
    send("pong", ++n);
  }
}

function* pong() {
  let n;

  while (true) {
    n = yield;
    console.log("pong", n);
    send("ping", ++n);
  }
}

function run() {
  while (queue.length) {
    let [name, message] = queue.shift();
    players[name].next(message);
  }
}

function send(name, message) {
  queue.push([name, message]);
}

players.ping = ping();
send("ping", "get ready");
players.pong = pong();
send("pong", "get ready");
send("ping", 0);
run();
