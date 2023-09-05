function getBudgets(people) {
  let total = 0;
  for (const person of people) {
    total += person.budget;
  }
  return total;
}

module.exports = getBudgets;
