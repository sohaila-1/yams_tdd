const { analyserLancer } = require("./yams");

// Fonction qui gère plusieurs lancers pour le bonus
function analyserLancersBonus(lancers) {
  const figuresUtilisees = [];
  const resultats = [];

  for (let lancer of lancers) {
    let [figure, points] = analyserLancer(lancer);

    if (figuresUtilisees.includes(figure)) {
      const somme = lancer.reduce((a, b) => a + b, 0);
      figure = "Chance";
      points = somme;
    }
    figuresUtilisees.push(figure);
    resultats.push([figure, points]);
  }
  
  return resultats; 
}

module.exports = { analyserLancersBonus };
