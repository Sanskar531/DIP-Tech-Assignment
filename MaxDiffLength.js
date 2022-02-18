function MaxDiffLength(a1, a2) {
  //Couldn't optimize on time so had to leave it like this.
  let a1Max = Number.NEGATIVE_INFINITY;
  let a1Min = Number.POSITIVE_INFINITY;
  let a2Min = Number.POSITIVE_INFINITY;
  let a2Max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < a1.length; i++) {
    if (a1Max < a1[i].length) {
      a1Max = a1[i].length;
    }
    if (a1Min > a1[i].length) {
      a1Min = a1[i].length;
    }
  }
  for (let i = 0; i < a2.length; i++) {
    if (a2Max < a2[i].length) {
      a2Max = a2[i].length;
    }
    if (a2Min > a2[i].length) {
      a2Min = a2[i].length;
    }
  }
  diffA1MaxA2Min = Math.abs(a1Max - a2Min);
  diffA2MaxA1Min = Math.abs(a2Max - a1Min);
  return diffA1MaxA2Min > diffA2MaxA1Min ? diffA1MaxA2Min : diffA2MaxA1Min;
}

//Test Cases
console.log(
  MaxDiffLength(
    ["8216", "121214", "111", "123241", "906745546456", "23233", "232323"],
    ["11223344556677", "6253626", "2626262626"]
  )
);
