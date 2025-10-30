function analyserLancer(des) {
  // Je compte combien de fois chaque valeur apparaît
  const counts = {};
  for (let d of des) {
    if (counts[d]) {
      counts[d]++;
    } else {
      counts[d] = 1;
    }
  }

  // Je récupère uniquement le nombre d’occurrences (ex: [2,3])
  const occ = Object.values(counts);
  
  if (occ.includes(5)) {
    return ["Yams", 50];
  }

  if (occ.includes(4)) {
    return ["Carré", 35];
  }

  if (occ.includes(3) && occ.includes(2)) {
    return ["Full", 30];
  }

  // Vérification de la grande suite (dés qui se suivent)
  const sorted = [...new Set(des)].sort();
  if (
    (sorted[0] === 1 && sorted.join("") === "12345") ||
    (sorted[0] === 2 && sorted.join("") === "23456")
  ) {
    return ["Grande suite", 40];
  }

  if (occ.includes(3)) {
    return ["Brelan", 28];
  }

  // Si aucune figure trouvée, je fais la somme
  const somme = des.reduce((a, b) => a + b, 0);
  return ["Chance", somme];
}

module.exports = { analyserLancer };
