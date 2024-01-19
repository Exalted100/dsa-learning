// https://leetcode.com/problems/number-of-1-bits/description/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const m = n.toString(2);

    let hammingWeightNumber = 0
    for (let i = 0; i < m.length; i++) {
        if (m[i] == 1) {
            hammingWeightNumber++;
        }
    }
    return hammingWeightNumber;
};

console.log(hammingWeight('00000000000000000000000000001011'))
console.log(hammingWeight('00000000000000000000000010000000'))
console.log(hammingWeight('11111111111111111111111111111101'))