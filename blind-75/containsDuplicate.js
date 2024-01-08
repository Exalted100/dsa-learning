// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsObject = {};

    for (let i = 0; i < nums.length; i++) {
        if (numsObject[nums[i]]) {
            return true;
        } else {
            numsObject[nums[i]] = 1;
        }
    }

    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,2,3,1]))