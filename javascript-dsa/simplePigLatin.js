/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    //Code here
    let finalStr = []
    let arr = str.split(" ")
    for(let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split("")
    if (/[a-zA-Z]/.test(arr[i]) === true) {
      let temp = newArr[0] + "ay"
    newArr.splice(0, 1)
      newArr.push(temp)
      }
      finalStr.push(newArr.join(""))
      }
          return finalStr.join(" ")
  }
  
  console.log(pigIt("Pig latin is cool !"))