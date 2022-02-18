function HalvingSum(a) {
  /*
        input-
        always postive input hence, no need to test negative cases
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
