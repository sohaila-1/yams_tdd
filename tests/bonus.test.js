const { analyserLancersBonus } = require("../src/bonus");

test("Bonus : chaque figure utilisée une seule fois", () => {
  const lancers = [
    [2, 2, 3, 3, 3],  // Full
    [3, 3, 3, 4, 5],  // Brelan
    [3, 3, 3, 4, 5]   // devrait donner Chance car Brelan déjà utilisé
  ];

  const resultat = analyserLancersBonus(lancers);

  expect(resultat).toEqual([
    ["Full", 30],
    ["Brelan", 28],
    ["Chance", 18]
  ]);
});
