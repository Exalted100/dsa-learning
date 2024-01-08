// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const newArray = [];
    const numsObject = {};

    for (let i = 0; i < nums.length; i++) {
        numsObject[nums[i]] = 1;
    }

    for (let i = 0; i < nums.length; i++) {}
};