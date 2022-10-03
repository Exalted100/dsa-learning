// https://leetcode.com/problems/backspace-string-compare/

const backspaceCompare = (s, t) => {
    return removeBackspace(s) === removeBackspace(t);
}

const removeBackspace = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#" && i !== 0) {
            str = str.slice(0, i - 1) + str.slice(i + 1);
            i -= 2;
        } else if (str[i] === "#" && i === 0) {
            str = str.slice(0, i) + str.slice(i + 1);
            i--;
        }
    }
    return str;
}

// O(n) time complexity
console.log(backspaceCompare("ab##", "c#d#"))