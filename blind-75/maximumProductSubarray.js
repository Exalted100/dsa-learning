// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
// SLOW
// var maxProduct = function (nums) {
//   let maxProduct = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let currentProduct = 1;
//     for (let e = i; e < nums.length; e++) {
//       currentProduct *= nums[e];

//       if (currentProduct > maxProduct) {
//         maxProduct = currentProduct;
//       }
//     }
//   }

//   return maxProduct;
// };

var maxProduct = function (nums) {
  let result = nums[0];
  let previousMax = nums[0];
  let previousMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currentMax = Math.max(nums[i], nums[i] * previousMax, nums[i] * previousMin);
    const currentMin = Math.min(nums[i], nums[i] * previousMax, nums[i] * previousMin);

    previousMax = currentMax;
    previousMin = currentMin;

    result = Math.max(previousMax, result);
  }

  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-3, -1, -1]));
console.log(maxProduct([2, 3, -2, 4, -2, -2]));
console.log(maxProduct([0, 2]));
