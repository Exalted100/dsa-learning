// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;

    for (let leftPointer = 0, rightPointer = 1; rightPointer < prices.length; null) {
        if (prices[rightPointer] - prices[leftPointer] < 0) {
            leftPointer = rightPointer;
            rightPointer++
        } else if (prices[rightPointer] - prices[leftPointer] > maxProfit) {
            maxProfit = prices[rightPointer] - prices[leftPointer];
            rightPointer++;
        } else {
            rightPointer++;
        }
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2,1,4]))
console.log(maxProfit([2,1,2,1,0,1,2]))