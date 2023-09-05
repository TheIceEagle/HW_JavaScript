function arrayOfMultiples(num,length) {
  // Your code
    const arr = [];
    for (let i = 1; i <=length; i++) {
      arr.push(num*i);
    }
    return arr;
}

module.exports = arrayOfMultiples;
