// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numbersObject = {};

    for (let i = 0; i < nums.length; i++) {
        numbersObject[nums[i]] = {present: true, index: i};
    }

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (numbersObject[difference]?.present && numbersObject[difference]?.index !== i) {
            return [i, numbersObject[difference]?.index]
        }
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));