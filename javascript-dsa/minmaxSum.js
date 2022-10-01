/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
    let numbers = arr.sort((a, b) => a - b);
    let lowest = numbers[0] + numbers[1] + numbers[2] + numbers[3];
    let highest = numbers[4] + numbers[1] + numbers[2] + numbers[3];
    
    console.log(lowest + " " + highest)
}