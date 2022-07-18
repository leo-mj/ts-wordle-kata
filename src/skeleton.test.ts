import markWordle from "./skeleton";

test("markWordle returns correct green mark", () => {
  expect(markWordle("gloat", "blues")).toBe({0: {letter: "G", colour: "grey"}, 1: {letter: "L", colour: "green"}, 2: {letter: "O", colour: "grey"}, 3: {letter: "A", colour: "grey"}, 4: {letter: "T", colour: "grey"}});
  expect(markWordle("blues", "blues")).toBe({0: {letter: "B", colour: "green"}, 1: {letter: "L", colour: "green"}, 2: {letter: "U", colour: "green"}, 3: {letter: "E", colour: "green"}, 4: {letter: "S", colour: "green"}});

});

test("markWordle returns correct yellow mark for guess and hiddenTarget without repetitions", () => {
  expect(markWordle("great", "blues")).toBe({0: {letter: "g", colour: "grey"}, 1: {letter: "r", colour: "grey"}, 2: {letter: "e", colour: "yellow"}, 3: {letter: "a", colour: "grey"}, 4: {letter: "t", colour: "grey"}});
})

test("markWordle returns correct yellow mark for guess and hiddenTarget with repetition", () => {
  expect(markWordle("fleet", "eerie")).toBe({0: {letter: "f", colour: "grey"}, 1: {letter: "l", colour: "grey"}, 2: {letter: "e", colour: "yellow"}, 3: {letter: "e", colour: "yellow"}, 4: {letter: "t", colour: "grey"}});
})

test("markWordle returns correct yellow and green mark for guess and hiddenTarget with repetition", () => {
  expect(markWordle("eeeee", "eerie")).toBe({0: {letter: "e", colour: "green"}, 1: {letter: "e", colour: "green"}, 2: {letter: "e", colour: "grey"}, 3: {letter: "e", colour: "grey"}, 4: {letter: "e", colour: "green"}});
  expect(markWordle("eeesh", "eerie")).toBe({0: {letter: "e", colour: "green"}, 1: {letter: "e", colour: "green"}, 2: {letter: "e", colour: "yellow"}, 3: {letter: "s", colour: "grey"}, 4: {letter: "h", colour: "grey"}});

})