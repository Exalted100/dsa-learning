// https://leetcode.com/problems/palindromic-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let numberOfPalindromes = 0;

  for (let i = 0; i < s.length; i++) {
    numberOfPalindromes++;
    for (let e = i + 1; e < s.length; e++) {
    const str = s.slice(i, e + 1)

    for (let a = 0, b = str.length - 1; a < str.length; a++, b--) {
        if (str[a] !== str[b]) {
            break;
        } else {
            if (str.length - 1 === a) {
                numberOfPalindromes++;
            }
        }
    }
    }
  }

  return numberOfPalindromes;
};

console.log(countSubstrings("abc"))
console.log(countSubstrings("aaa"))
console.log(countSubstrings("aba"))
console.log(countSubstrings("dbabcccbcdbbbadabbdabaabcbbabaacdadcdbbbbdddbcbbbcbcabacacdaadaadcdccbacdaadadcbaacabbddabdadcabbccadacadaaacbbddaaababacaabbbacaccbcbbabddbbcccaaacbcdcabcbacdbddcdcadaaadcbccbbcabbcbdaadcbddaacacdadacbbdabcdcdadccaccdbdddddcabdbcdbaadacadadbabdcdbbadaacdbadcdabdbbcabbbdaacaaaaadcaabaaaadabaaddcaabdddcbcadcbdbbdbcbcdbadcadacbbcdccddaccccacbacaacbbdadadcacabdabadbbcdbcaaccdbdcabcadbacbccddbabbdacbcbbcbcabcacdaacccaadcdbdccabcaaacaddadcabacdccaaaddaaadbccdbbcccdddababcdbcddcbdddbbbdaadaccbcaabbcbdbadbabbacdbbbdaaccdcabddacadabcccacdabacbcdbcbdabddacacbdbcaacacaabbaaccddabaadbbaabaddbcacbacdbbbacdccabbcdbbbdbdbbcacabdddbdbaaabbcdcbabcbbbccdcdcdcaaddadccbabbacaddcaddcadcdccaccacabbaababdbbcbdcdccccccdadbdbdcdbdadcdcacdaabaacabaacdacdbaaccadbcddbdccabbcabcadcbdadbcdadbbbccacbcbbcaaaabdacbadacaadcadaacdacddcbbabdacacaabccdaccbbcbbcbcaacdabdcbcdbccdbcbcbddaacdacaaaddcaddcadccacbaddbbbccbbbcbbcbadcabbccbbaadaacacabddbdbddcadbdaaccadbcccabdcdbadbbacbcbbcdcabcddcddddabddbdabdcabdbdbbbcdbcdabbdcb"))