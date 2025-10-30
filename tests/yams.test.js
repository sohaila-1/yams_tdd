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

test("Grande suite : 1-2-3-4-5 ou 2-3-4-5-6 => 40 points", () => {
  const resultat1 = analyserLancer([1, 2, 3, 4, 5]);
  expect(resultat1).toEqual(["Grande suite", 40]);

  const resultat2 = analyserLancer([2, 3, 4, 5, 6]);
  expect(resultat2).toEqual(["Grande suite", 40]);
});

test("Chance : dés non identiques => somme des dés", () => {
  const resultat = analyserLancer([1, 2, 3, 4, 6]);
  expect(resultat).toEqual(["Chance", 16]);
});


