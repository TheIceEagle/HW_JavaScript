function mapping(array) {
  const result = {};

  for (const letter of array) {
    
    if (letter.length === 1) {
      
      result[letter.toLowerCase()] = letter.toUpperCase();
    }
  }

  return result;
}

module.exports = mapping;
