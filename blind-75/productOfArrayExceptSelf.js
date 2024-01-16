// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TOO SLOW
// var productExceptSelf = function(nums) {
//     const newArray = [];

//     for (let i = 0; i < nums.length; i++) {
//         let tempValue = 1;
//         for (let e = 0; e < nums.length; e++) {
//             if (e !== i) {
//                 tempValue *= nums[e];
//             }

//             if (e === nums.length - 1) {
//                 newArray[i] = tempValue;
//             }
//         }
//     }

//     return newArray;
// };

var productExceptSelf = function(nums) {
    const prefixArray = [];
    const postfixArray = [];
    const finalArray = [];

    for (let i = 0; i < nums.length; i++) {
        const prefixArrayValue = i - 1 > -1 ? prefixArray[i - 1] : 1;
        const numsValue = i - 1 > -1 ? nums[i - 1] : 1;
        prefixArray[i] = numsValue * prefixArrayValue;
    }

    for (let i = nums.length - 1; i > -1; i--) {
        const postfixArrayValue = i + 1 < nums.length ? postfixArray[i + 1] : 1;
        const numsValue = i + 1 < nums.length ? nums[i + 1] : 1;
        postfixArray[i] = postfixArrayValue * numsValue;
    }

    for (let i = 0; i < nums.length; i++) {
        finalArray[i] = prefixArray[i] * postfixArray[i];
    }

    return finalArray;
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))