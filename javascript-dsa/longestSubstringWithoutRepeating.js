// Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let substring = ""
    
    for (let i = 0; i < s.length; i++) {
        for (let e = i; e < s.length; e++) {
            if (substring.includes(s[e])) {
                if (substring.length > longest) {
                    longest = substring.length
                }
                substring = ""
                break;
            } else {
                substring = substring + s[e]
            }
            if (e + 1 == s.length) {
                if (substring.length > longest) {
                    longest = substring.length
                }
                substring = ""
                break;
            }
        }
    }
    return longest
};