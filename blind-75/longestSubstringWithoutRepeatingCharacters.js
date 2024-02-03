// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }

    let longestSubstring = 1;
    let trackSeenChars = {};
    trackSeenChars[s[0]] = {seen: true, position: 0};

    let tempValue = 1;

    for (let left = 0, right = 1; right < s.length; null) {
        if (trackSeenChars[s[right]]?.seen) {
            left = trackSeenChars[s[right]]?.position + 1;
            right = trackSeenChars[s[right]]?.position + 2;
            trackSeenChars = {};
            trackSeenChars[s[left]] = {seen: true, position: left};
            tempValue = 1;
        } else {
            trackSeenChars[s[right]] = {seen: true, position: right};
            tempValue += 1;
            if (tempValue > longestSubstring) {
                longestSubstring = tempValue
            };
            right += 1;
        }
    }

    return longestSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))