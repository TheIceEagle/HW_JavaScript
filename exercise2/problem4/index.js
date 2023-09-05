function numInStr(array) {

  const result = [];

 
  for (let i = 0; i < array.length; i++) {
    
    if (/\d/.test(array[i])) {
      
      result.push(array[i]);
    }
  }

  
  return result;
}

module.exports = numInStr;
