/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]
Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words.

link: https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
*/

function topThreeWords(text) {
    const arr = text.toLowerCase().split(/[^a-zA-Z0-9\']+/)
    let array = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "" && arr[i] !== "'") {
        array.push(arr[i])
      }
    }
    let count = 0, first = 0, second = 0, finalArr = [array[0], array[1], array[2]]
    
    for (let i = 0; i < array.length; i++) {
      count = 0
      for (let e = 0; e < array.length; e++) {
        if (array[e] === array[i]) {
          count++
        }
      }
      if (count > first) {
        finalArr.splice(0, 0, array[i])
        first = count
      } else if (count > second && array[i] !== finalArr[0]) {
        finalArr.splice(1, 0, array[i])
        second = count
      } else if (count > third && array[i] !== finalArr[0] && array[i] !== finalArr[1]) {
        finalArr.splice(2, 0, array[i])
        third = count
      }
    }
    let returnArr = []
    for (let i = 0; i < finalArr.length; i++) {
      if (finalArr[i] !== undefined && finalArr[i] !== finalArr[i - 1]) {
        returnArr.push(finalArr[i])
      }
    }
    if (returnArr[2] === returnArr[0] && returnArr[2] !== undefined) {
      returnArr.length = 2
    } else if (returnArr.length >= 3) {
      returnArr.length = 3
    }
    return returnArr
  }