// https://leetcode.com/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return "found it!"
    }

    let target = amount;
    for (coin in coins) {
        subproblem = target - coin;
        console.log("running")

        if (subproblem < 0) {
            continue;
        } else {
            return coinChange(coins, subproblem);
        }
    }
};

console.log(coinChange([1,2,5], 11))