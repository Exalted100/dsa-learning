// https://leetcode.com/problems/valid-parentheses/submissions/1155091931/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const expecting = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            expecting.push(")")
        } else if (s[i] === "[") {
            expecting.push("]")
        } else if (s[i] === "{") {
            expecting.push("}")
        } else if (s[i] === expecting[expecting.length - 1]) {
            expecting.pop();
        } else {
            return false;
        }
    }

    if (expecting.length > 0) {
        return false;
    }

    return true;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("["))