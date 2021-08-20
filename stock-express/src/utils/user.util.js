export const generateNewHoldings = (amount, symbol, price, holdings) => {
  let newHoldings = [...holdings];

  let holdingIndex = newHoldings.findIndex(x => x.symbol === symbol);

  if (holdingIndex >= 0) {
    let currentHolding = holdings[holdingIndex];

    const newTotalCost = currentHolding.totalCost + (price*amount);
    const newAverageCost = newTotalCost/ (amount + currentHolding.amount);

    const newHolding = {
      symbol: symbol,
      amount: amount + currentHolding.amount,
      averageCost: newAverageCost,
      totalCost: newTotalCost,
      currency: 'USD'
    }
    holdings[holdingIndex] = newHolding;

    return holdings;
  }

  const newHolding = {
    symbol: symbol,
    amount: amount,
    averageCost: price,
    totalCost: price*amount,
    currency: 'USD',
  }

  return [...newHoldings, newHolding];
}