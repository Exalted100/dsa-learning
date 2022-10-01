//link: https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript

function removeZeros(array) {
  let arr = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0 || array[i] === false) {
      arr[arr.length] = array[i]
    }
  }
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0 && array[i] !== false) {
      arr[arr.length] = array[i]
      console.log(arr)
    }
  }
  
  return arr
}