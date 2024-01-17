// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    if (strs.length === 1) {
        return strs[0];
    }

    const stringLengths = strs.map(str => str.length);
    const sortedStringsByLength = stringLengths.sort(function(a, b){return a-b});
    const shortestStringLength = sortedStringsByLength[0];

    let commonPrefix = "";

    if (!shortestStringLength) {
        return commonPrefix;
    }

    for (let i = 0; i < shortestStringLength; i++) {
        for (let e = 1; e < strs.length; e++) {
            if (strs[0][i] !== strs[e][i]) {
                return commonPrefix;
            } else if (strs[0][i] === strs[e][i] && e === strs.length - 1) {
                commonPrefix = commonPrefix + strs[0][i];
            }
        }
    }
    return commonPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["ab", "a"]));