/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){
    let newStr = str.split(/-|_/g);
    let arr = [newStr[0]];
    for (let i = 1; i < newStr.length; i++) {
      let divide = newStr[i].split("");
      let newDivide = divide[0].toUpperCase();
      divide.splice(0, 1, newDivide);
      arr.push(divide.join(""));
    }
    return arr.join("");
  }