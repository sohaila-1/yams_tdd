const { analyserLancer } = require("../src/yams");

test("Brelan : 3 dés identiques => 28 points", () => {
  const resultat = analyserLancer([3, 3, 3, 1, 2]);
  expect(resultat).toEqual(["Brelan", 28]);
});

test("Carré : 4 dés identiques => 35 points", () => {
  const resultat = analyserLancer([6, 6, 6, 6, 2]);
  expect(resultat).toEqual(["Carré", 35]);
});

test("Full : 3 dés + 2 dés identiques => 30 points", () => {
  const resultat = analyserLancer([2, 2, 3, 3, 3]);
  expect(resultat).toEqual(["Full", 30]);
});

test("Yams : 5 dés identiques => 50 points", () => {
  const resultat = analyserLancer([4, 4, 4, 4, 4]);
  expect(resultat).toEqual(["Yams", 50]);
});


