const { analyserLancer } = require("../src/yams");

test("Brelan : 3 dés identiques => 28 points", () => {
  const resultat = analyserLancer([3, 3, 3, 1, 2]);
  expect(resultat).toEqual(["Brelan", 28]);
});
