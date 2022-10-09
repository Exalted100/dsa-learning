const minRemoveToMakeValid = (s) => {
    let arr = [];
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            arr.push(")")
            newStr += "("
        } else if (s[i] === ")") {
            arr.pop() === ")" ? newStr += ")" : null
        } else {
            newStr += s[i];
        }
    }

    let secondArr = []

    for (let i = newStr.length - 1; i >= 0; i--) {
        let value = newStr[i];

        if (value === ")") secondArr.push("(");

        if (value === "(" && secondArr.pop() !== "(") newStr = newStr.slice(0, i) + newStr.slice(i + 1);
    }

    return newStr;
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("a)b(c)d"))
console.log(minRemoveToMakeValid("))(("))
console.log(minRemoveToMakeValid("())()((("))