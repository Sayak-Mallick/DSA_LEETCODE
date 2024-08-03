/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let minI = prices[0], profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let cost = prices[i] - minI;
        profit = Math.max(cost, profit);
        minI = Math.min(minI, prices[i]);
    }
    return profit;
};
