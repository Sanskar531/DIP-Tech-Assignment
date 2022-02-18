function HalvingSum(a) {
  /*
        input-always postive input hence, no need to test negative cases
        base case when a is smaller than 1 always returns 0 since we don't need to worry about fractional values.
        every recursive call is floored for getting an integer instead of a float.
    */
  if (a < 1) {
    return 0;
  }
  return a + Math.floor(HalvingSum(a / 2));
}
//tests
console.log(HalvingSum(1));
console.log(HalvingSum(25));
console.log(HalvingSum(10));
