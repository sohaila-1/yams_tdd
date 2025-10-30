function analyserLancer(des) {
  const counts = {};
  for (let d of des) {
    counts[d] = (counts[d] || 0) + 1;
  }

  const occurences = Object.values(counts);

  if (occurences.includes(5)) {
    return ["Yams", 50];
  } else if (occurences.includes(4)) {
    return ["Carré", 35];
  } else if (occurences.includes(3) && occurences.includes(2)) {
    return ["Full", 30];
  } else if (occurences.includes(3)) {
    return ["Brelan", 28];
  }

  // "Chance" : somme des dés
  return ["Chance", des.reduce((a, b) => a + b, 0)];
}

module.exports = { analyserLancer };
