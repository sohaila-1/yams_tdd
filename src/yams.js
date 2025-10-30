function analyserLancer(des) {
  const counts = {};
  for (let d of des) {
    counts[d] = (counts[d] || 0) + 1;
  }

  if (Object.values(counts).includes(3)) {
    return ["Brelan", 28];
  }

  return ["Chance", des.reduce((a, b) => a + b, 0)];
}

module.exports = { analyserLancer };
