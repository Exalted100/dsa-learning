// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */

// TOO SLOW
// var maxSubArray = function (nums) {
//   positiveIntegers = nums.filter((num) => num > 0);
//   let maxSubarraySum = nums.reduce((partialSum, a) => partialSum + a, 0);

//   if (positiveIntegers.length < 2) {
//     maxSubarraySum = Math.max(...nums);
//   } else {
//     for (let i = 0; i < nums.length; i++) {
//       for (let e = i; e < nums.length; e++) {
//         const presentArray = nums.slice(i, e + 1);
//         const presentArraySum = presentArray.reduce((partialSum, a) => partialSum + a, 0);

//         if (presentArraySum > maxSubarraySum) {
//             maxSubarraySum = presentArraySum;
//         }
//       }
//     }
//   }

//   return maxSubarraySum;
// };

var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0
        }

        currentSum += nums[i]

        if (maxSum < currentSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
  };

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([-2, -2, 1]));
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]));
console.log(maxSubArray([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([-1, -2]));
console.log(maxSubArray([1, -1, -2]));
console.log(maxSubArray([3, -3, 2, -3]));
