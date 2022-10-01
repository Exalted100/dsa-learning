/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10[raise to power -4] are acceptable.
*/

function plusMinus(arr) {
 let positive = 0;
 let negative = 0;
 let neither = 0;
 for (let i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
         negative++;
     } else if (arr[i] > 0) {
         positive++;
     } else {
         neither++
     }
 }
    let positiveRatio = positive/arr.length;
     let negativeRatio = negative/arr.length;
     let neitherRatio = neither/arr.length;
     
     console.log(positiveRatio.toFixed(6));
     console.log(negativeRatio.toFixed(6));
     console.log(neitherRatio.toFixed(6));
}
