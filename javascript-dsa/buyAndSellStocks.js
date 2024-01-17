// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let e = i + 1; e < prices.length; e++) {
      if (prices[e] - prices[i] > maxProfit) {
        maxProfit = prices[e] - prices[i];
      }
    }
  }

  return maxProfit;
};
