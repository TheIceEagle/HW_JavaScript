function sortIt(arr) {
  //Your code
  function compare(a, b) {
    if (Array.isArray(a)) {
      a = a[0]; 
    }
    if (Array.isArray(b)) {
      b = b[0]; 
    }
    return a - b;
  }

  
  return arr.sort(compare);
}

module.exports = sortIt;
