function numOfDigits(num) {
  // Your code
  const numStr = Math.abs(num).toString();
  return numStr.length;
}

module.exports = numOfDigits;
