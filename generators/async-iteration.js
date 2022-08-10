// Source: https://observablehq.com/@anjana/the-power-of-js-generators
// A sync iteration with @@asyncIterator
const getSwapiPagerator = (endpoint) =>
  async function* () {
    let nextUrl = `https://swapi.dev/api/${endpoint}`;

    while (nextUrl) {
      try {
        const response = await fetch(nextUrl);
        const data = await response.json();
        nextUrl = data.next;
        yield* data.results;
      } catch (err) {
        return;
      }
    }
  };

const starWars = {
  characters: {
    [Symbol.asyncIterator]: getSwapiPagerator("people"),
  },
  planets: {
    [Symbol.asyncIterator]: getSwapiPagerator("planets"),
  },
  ships: {
    [Symbol.asyncIterator]: getSwapiPagerator("starships"),
  },
};

const results = [];

for await (const page of starWars.planets) {
  console.log(page.name);
  results.push(page.name);
}

console.log(results);
