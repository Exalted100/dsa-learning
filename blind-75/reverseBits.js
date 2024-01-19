// https://leetcode.com/problems/reverse-bits/description/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const m = n.toString(2);
    let reversedN = '';
 
    for (let i = m.length - 1; i >= 0; i--) {
     reversedN += m[i];
    }
 
    const extraZeroesAfter = 8 - (m.length % 8);
    const extraZeroesBefore = 8 - ((reversedN.length + extraZeroesAfter) % 8);
 
    let fullReversedN = (extraZeroesBefore !== 8 ? '0'.repeat(extraZeroesBefore) : '') + reversedN + (extraZeroesAfter !== 8 ? '0'.repeat(extraZeroesAfter) : '')
 
    console.log(fullReversedN)
 
    return parseInt(fullReversedN, 2);
 };

console.log(reverseBits('00000010100101000001111010011100'))