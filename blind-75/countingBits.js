// https://leetcode.com/problems/counting-bits/description/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const m = n + 1;
    const binaryArray = new Array(m);

    for (let i = 0; i < m; i++) {
        binaryArray[i] = i.toString(2);
    }

    const result = new Array(m);

    for (let i = 0; i < m; i++) {
        let numberOfOnes = 0;
        for (let e = 0; e < binaryArray[i].length; e++) {
            if (binaryArray[i][e] == 1) {
                numberOfOnes++;
            }
        }
        result[i] = numberOfOnes;
    }

    return result;
};

console.log(countBits(5))