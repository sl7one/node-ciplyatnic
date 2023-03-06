function utilsTotalSumm(poultry, food, options) {
  const totalPoultry = poultry.reduce((acc, { count, price }) => (acc += count * price), 0);
  const totalFood = food.reduce((acc, { count, price }) => (acc += count * price), 0);
  const totalOptions = options.reduce((acc, { count, price }) => (acc += count * price), 0);

  return totalPoultry + totalFood + totalOptions;
}

module.exports = { utilsTotalSumm };
