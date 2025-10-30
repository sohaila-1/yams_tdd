const { analyserLancer } = require("../src/yams");

test("Brelan : 3 dés identiques => 28 points", () => {
  const resultat = analyserLancer([3, 3, 3, 1, 2]);
  expect(resultat).toEqual(["Brelan", 28]);
});

test("Carré : 4 dés identiques => 35 points", () => {
  const resultat = analyserLancer([6, 6, 6, 6, 2]);
  expect(resultat).toEqual(["Carré", 35]);
});
