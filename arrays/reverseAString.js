// https://leetcode.com/problems/reverse-string/

const reverseString = (s) => {
    let tempValues = {}
    for (i = s.length - 1, e = 0; i > -1; i--, e++) {
        tempValues[e] = s[i];
    }
    for (let i = 0; i < s.length; i++) {
        s[i] = tempValues[i];
    }
}

let s = ["h","e","l","l","o"]
reverseString(s)

console.log(s)