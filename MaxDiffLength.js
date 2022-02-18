function MaxDiffLength(a1, a2) {
  /*
    Refactored to more readable code
    Looped through each array to find the longest and shortest strings 
    then compared the differences and returned the one which was higher
  */
  if (a1.length > 0 && a2.length > 0) {
    const [a1Max, a1Min] = findLongestAndShortestInArr(a1);
    const [a2Max, a2Min] = findLongestAndShortestInArr(a2);
    let diffA1MaxA2Min = Math.abs(a1Max - a2Min);
    let diffA2MaxA1Min = Math.abs(a2Max - a1Min);
    return diffA1MaxA2Min > diffA2MaxA1Min ? diffA1MaxA2Min : diffA2MaxA1Min;
  } else if (a1.length >= 1) {
    return findLongestInArr(a1);
  } else if (a2.length >= 1) {
    return findLongestInArr(a2);
  }
  return null;
}

function findLongestAndShortestInArr(a) {
  let aMax = Number.NEGATIVE_INFINITY;
  let aMin = Number.POSITIVE_INFINITY;
  for (let i = 0; i < a.length; i++) {
    if (aMax < a[i].length) {
      aMax = a[i].length;
    }
    if (aMin > a[i].length) {
      aMin = a[i].length;
    }
  }
  return [aMax, aMin];
}

function findLongestInArr(a) {
  let curr_max = 0;
  a.forEach((item) => {
    if (curr_max < item.length) {
      curr_max = item.length;
    }
  });
  return curr_max;
}

//Test Cases
console.log(MaxDiffLength(["112121212"], ["2132"]));
