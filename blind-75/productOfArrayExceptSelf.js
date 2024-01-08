// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const newArray = [];

    for (let i = 0; i < nums.length; i++) {
        let tempValue = 1;
        for (let e = 0; e < nums.length; e++) {
            if (e !== i) {
                tempValue *= nums[e];
            }

            if (e === nums.length - 1) {
                newArray[i] = tempValue;
            }
        }
    }

    return newArray;
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))