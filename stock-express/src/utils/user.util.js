export const generateNewHoldings = (amount, symbol, price, holdings) => {
  let newHoldings = [...holdings];

  let holdingIndex = newHoldings.findIndex(x => x.symbol === symbol);

  if (holdingIndex >= 0) {
    let currentHolding = holdings[holdingIndex];

    const newTotalAmount = amount + currentHolding.amount;
    const newTotalCost = currentHolding.totalCost + (price*amount);
    const newAverageCost = newTotalCost/ newTotalAmount;

    const newHolding = {
      symbol: symbol,
      amount: newTotalAmount,
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