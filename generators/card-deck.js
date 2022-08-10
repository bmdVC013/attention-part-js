// Source: https://observablehq.com/@anjana/the-power-of-js-generators
const cardDeck = {
  suits: ["♣️", "♦️", "♥️", "♠️"],
  court: ["J", "Q", "K", "A"],
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i;
      for (let c of this.court) yield suit + c;
    }
  },
};

for (let card of cardDeck) {
  console.log(card);
}
