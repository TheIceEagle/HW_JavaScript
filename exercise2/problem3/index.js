function numbersSum(arr) {
  
  const sum = arr.reduce( (sumSoFar, nextValue) => {
    if ( typeof nextValue === "number" && isFinite(nextValue) ) {
       return sumSoFar + nextValue;
    }
    return sumSoFar;
 }, 0);
  
  return sum;
}

module.exports = numbersSum;
