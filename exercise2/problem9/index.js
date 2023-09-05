function duplicateNums(nums) {
  const duplicateArray = [];
  const numCount = {};

  
  for (const num of nums) {
    if (numCount[num]) {
      if (numCount[num] === 1) {
        duplicateArray.push(num);
      }
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }
  }

  duplicateArray.sort((a, b) => a - b);

  return duplicateArray;
}

module.exports = duplicateNums;
