function afterNYears(people, n) {
  
  const updatedAges = {};
  for (const person in people) {
    
    const newAge = people[person] + Math.abs(n);
    updatedAges[person] = newAge;
  }


  return updatedAges;
}


module.exports = afterNYears;
