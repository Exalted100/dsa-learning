// https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsMapping = {};

    for (let i = 0; i < nums.length; i++) {
        numsMapping[nums[i]] = true;
    }

    for (let i = 0; i < nums.length + 1; i++) {
        if (!numsMapping[i]) {
            return i;
        }
    }
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))