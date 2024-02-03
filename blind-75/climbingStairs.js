// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
// recursive solution - too slow
// var climbStairs = function(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }

//     return climbStairs(n - 1) + climbStairs(n - 2)
// };

var climbStairs = function(n) {
    let numberOfSteps = 0;
    const lastTwoNumbers = [0, 1];
    for (let i = 0; i < n; i++) {
        numberOfSteps = lastTwoNumbers[0] + lastTwoNumbers[1];

        lastTwoNumbers[0] = lastTwoNumbers[1];
        lastTwoNumbers[1] = numberOfSteps;
    }
    return numberOfSteps;
};

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(7))
console.log(climbStairs(8))
console.log(climbStairs(9))