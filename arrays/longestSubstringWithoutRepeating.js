// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
    let repeatedStrings = {};
    let longestSubstring = 0;
    let tempLength = 0;

    for (let e = 0; e < s.length; e++) {
        for (let i = e; i < s.length; i++) {
            if (!repeatedStrings[s[i]]) {
                repeatedStrings[s[i]] = true;
                tempLength++;
                if (tempLength > longestSubstring) longestSubstring = tempLength;
            } else {
                tempLength = 0;
                repeatedStrings = {};
                break;
            }
        }
    }

    return longestSubstring;
};

// O(n) time complexity
console.log(lengthOfLongestSubstring("pwwkew"))