// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sObject = {};
    for (let i = 0; i < s.length; i++) {
        sObject[s[i]] ? sObject[s[i]] += 1 : sObject[s[i]] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (sObject[t[i]]) {
            sObject[t[i]] -= 1
        } else {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))