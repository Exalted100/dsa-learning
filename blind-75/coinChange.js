// https://leetcode.com/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const startTime = Date.now();
  coins = coins.sort((a, b) => a - b);

  for (let i = coins.length - 1; i >= 0; i--) {
    let iterationQueue = [{ index: i, target: amount, numOfCoins: 0 }];

    while (iterationQueue.length > 0) {
      let currentIteration = iterationQueue[iterationQueue.length - 1];
      let target = currentIteration.target;
      let numOfCoins = currentIteration.numOfCoins;
      iterationQueue.pop();

      while (target >= 0) {
        if (target === 0) {
          const endTime = Date.now();

          console.log((endTime - startTime) / 1000);
          return numOfCoins;
        }

        numOfCoins++;
        target -= coins[currentIteration.index];
        currentIteration.index > 1
          ? iterationQueue.push({
              index: currentIteration.index - 2,
              target,
              numOfCoins,
            })
          : null;
        currentIteration.index > 0
          ? iterationQueue.push({
              index: currentIteration.index - 1,
              target,
              numOfCoins,
            })
          : null;
        iterationQueue.push({
          index: currentIteration.index,
          target,
          numOfCoins,
        });
      }
    }
  }

  return -1;
};

console.log(coinChange([1, 2, 5], 0));
console.log(coinChange([1], 0));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([2, 5, 10, 1], 27));
console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([83, 186, 408, 419], 6249));
