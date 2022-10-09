// https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        value = s[i];

        if (value === "(") arr.push(")");
        if (value === "[") arr.push("]");
        if (value === "{") arr.push("}");

        if (value === ")" && arr.pop() !== ")") return false;
        if (value === "]" && arr.pop() !== "]")  return false;
        if (value === "}" && arr.pop() !== "}")  return false;
    }

    if (arr.length !== 0) return false;

    return true;
}

console.log(isValid("{[(]}"))