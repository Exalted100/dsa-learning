// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */

// WRONG
// var maxSubArray = function(nums) {
//     let maxSubarraySum = nums.reduce((partialSum, a) => partialSum + a, 0);

//     for (let firstPointer = 0, secondPointer = nums.length - 1; secondPointer >= firstPointer; null) {
//         const presentArray = nums.slice(firstPointer, secondPointer + 1);
//         const arraySum = presentArray.reduce((partialSum, a) => partialSum + a, 0);
//         if (arraySum > maxSubarraySum) {
//             maxSubarraySum = arraySum;
//         }

//         if (nums[secondPointer] + nums[secondPointer - 1] < 0 && nums[secondPointer] > 0 && secondPointer - firstPointer > 1) {
//             secondPointer--;
//         } else if (nums[firstPointer] + nums[firstPointer + 1] < 0 && nums[firstPointer] > 0 && secondPointer - firstPointer > 1) {
//             firstPointer++;
//         } else if (nums[firstPointer] < nums[secondPointer]) {
//             firstPointer++;
//         } else {
//             secondPointer--;
//         }
//     }

//     return maxSubarraySum;
// };

// WRONG
// var maxSubArray = function (nums) {
//     positiveIntegers = nums.filter((num) => num > 0);
//   let maxSubarraySum = nums.reduce((partialSum, a) => partialSum + a, 0);

//   if (positiveIntegers.length < 2) {
//     maxSubarraySum = Math.max(...nums);
// } else {
//     for (
//       let firstPointer = 0, secondPointer = 1;
//       secondPointer <= nums.length;
//       null
//     ) {
//       const presentArray = nums.slice(firstPointer, secondPointer + 1);
//       const arraySum = presentArray.reduce(
//         (partialSum, a) => partialSum + a,
//         0
//       );
//       if (arraySum > maxSubarraySum) {
//         maxSubarraySum = arraySum;
//       }

//       if (
//         nums[firstPointer] < 0 ||
//         nums[firstPointer] + nums[firstPointer + 1] <
//           0
//       ) {
//         firstPointer = secondPointer;
//         secondPointer++;
//       } else if (arraySum > maxSubarraySum) {
//         secondPointer++;
//       } else {
//         secondPointer++;
//       }
//     }
//   }

//   return maxSubarraySum;
// };

var maxSubArray = function (nums) {
  positiveIntegers = nums.filter((num) => num > 0);
  let maxSubarraySum = nums.reduce((partialSum, a) => partialSum + a, 0);

  if (positiveIntegers.length < 2) {
    maxSubarraySum = Math.max(...nums);
  } else {
    for (let i = 0; i < nums.length; i++) {
      for (let e = i; e < nums.length; e++) {
        const presentArray = nums.slice(i, e + 1);
        const presentArraySum = presentArray.reduce((partialSum, a) => partialSum + a, 0);

        if (presentArraySum > maxSubarraySum) {
            maxSubarraySum = presentArraySum;
        }
      }
    }
  }

  return maxSubarraySum;
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
