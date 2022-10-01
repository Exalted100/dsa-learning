//Task: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  //Code here
  let newStr = str.split(" ")
  let finalStr = []
  for (let i = 0; i < newStr.length; i++) {
    if (/[a-zA-Z]/.test(newStr[i])) {
      finalStr.push(newStr[i].slice(1) + newStr[i][0] + "ay")
    } else {
      finalStr.push(newStr[i])
    }
  }
  return finalStr.join(" ")
}