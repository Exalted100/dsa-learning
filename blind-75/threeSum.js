// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TOO SLOW
// var threeSum = function(nums) {
//     const results = [];
//     const numsObject = {};
//     for (let i = 0; i < nums.length; i++) {
//         for (let e = i + 1; e < nums.length; e++) {
//             const valueNeededToMakeZero = 0 - (nums[i] + nums[e]);
//             if (numsObject[valueNeededToMakeZero]) {
//                 results.push([valueNeededToMakeZero, nums[i], nums[e]].sort())
//             }
//         };
//         numsObject[nums[i]] = true;
//     }

//     const finalResult = [];
//     const comparisonObject = {};
// for (let i = 0; i < results.length; i++) {
//     if (!comparisonObject[results[i].join()]) {
//         finalResult.push(results[i]);
//         comparisonObject[results[i].join()] = true;
//     }
//     }

//     return finalResult;
// };

var threeSum = function (nums) {
  const results = [];
  const numsObject = {};

  nums = nums.sort();

  const comparisonObject = {};

  for (let i = 0; i < nums.length; i++) {
    for (let e = i + 1; e < nums.length; e++) {
      const valueNeededToMakeZero = 0 - (nums[i] + nums[e]);
      if (numsObject[valueNeededToMakeZero]) {
        if (
          !comparisonObject[[valueNeededToMakeZero, nums[i], nums[e]].join()]
        ) {
          results.push([valueNeededToMakeZero, nums[i], nums[e]]);
          comparisonObject[
            [valueNeededToMakeZero, nums[i], nums[e]].join()
          ] = true;
        }
      }
    }
    numsObject[nums[i]] = true;
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([1,2,-2,-1]));
console.log(threeSum([-1,-1,-1,0,1,1]));
