// https://leetcode.com/problems/longest-repeating-character-replacement/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let lastChar = 0;
    let currentChar = s[0];
    let longestSubstring = 0;
    let tempSubstringLength = 0;
    let switchesLeft = k;

    for (let i = 0; i < s.length; null) {
        if (i - 1 < 0 || s[i] === currentChar) {
            tempSubstringLength++;
            i++
        } else if (switchesLeft > 0) {
            switchesLeft--;
            tempSubstringLength++
            i++
        } else {
            currentChar = s[i];
            i = (lastChar + 1) - k > -1 ? (lastChar + 1) - k : 0;
            switchesLeft = k;
            tempSubstringLength = 0;
            lastChar = i;
        }
        if (switchesLeft === k && k !== 0) {
            lastChar = i;
        }
        if (tempSubstringLength > longestSubstring) {
            longestSubstring = tempSubstringLength;
        }
    }

    return longestSubstring;
};

// console.log(characterReplacement("ABAB", 2))
// console.log(characterReplacement("AABABBA", 1))
// console.log(characterReplacement("ABAA", 0))
// console.log(characterReplacement("ABBB", 2))
console.log(characterReplacement("AAAABBB", 5))
console.log(characterReplacement("ABCDE", 1))