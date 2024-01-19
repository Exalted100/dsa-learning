// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1
    } else if (n === 2) {
        return 2
    } else if (n === 3) {
        return 3
    } else {
        return 3 + ((n - 3) * 2)
    }
};
