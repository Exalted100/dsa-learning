// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newString = s.split(/[^a-zA-Z0-9]/).join("").toLowerCase();

    const reversedString = newString.split("").reverse().join("");

    if (newString === reversedString) {
        return true
    } else {
        return false
    }
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
// console.log(isPalindrome(" "))