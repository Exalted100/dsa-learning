// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const allArr = [];
  const valuesToIgnore = {};

  for (let i = 0; i < strs.length; i++) {
    if (valuesToIgnore[i]) {
        continue;
    }
    const currentArray = [strs[i]];

    for (let e = i + 1; e < strs.length; e++) {
      if (strs[i].length !== strs[e].length || valuesToIgnore[i]) {
        continue;
      } else {
        const iObject = {};
        for (let a = 0; a < strs[i].length; a++) {
          iObject[strs[i][a]] ? (iObject[strs[i][a]] += 1) : (iObject[strs[i][a]] = 1);
        }

        if (strs[i].length === 0 && strs[e].length === 0) {
            currentArray.push(strs[e])
            valuesToIgnore[e] = true;
        }

        for (let a = 0; a < strs[e].length; a++) {
          if (iObject[strs[e][a]]) {
            iObject[strs[e][a]] -= 1;
            if (a === strs[e].length - 1) {
                currentArray.push(strs[e])
                valuesToIgnore[e] = true;
            }
          } else {
            break;
          }
        }
      }
    }
    allArr.push(currentArray)
  }

  return allArr;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["", ""]))