// https://leetcode.com/problems/longest-increasing-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let current = nums[0];
    let currentArray = [nums[0]];

    const findValue = (arr, val) => {
        for (let i = 0; i < arr.length; i++) {
            if (val < arr[i] && (val > arr[i - 1] || i < 1)) {
                return i;
            }
        }
        return -1;
    }

    for (let i = 1; i < nums.length; i++) {
        if (current < nums[i]) {
            currentArray.push(nums[i])
        } else if (current > nums[i]) {
            const value = findValue(currentArray, nums[i])
            if (value === -1 && nums[i] !== currentArray[currentArray.length - 2]) {
                currentArray.pop()
                currentArray.push(nums[i])
             } else if (value >= 0) {
                currentArray.splice(value, Infinity, nums[i]);
             }
        }

        current = nums[i];
    }
    console.log(currentArray)

    return currentArray.length;
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
// console.log(lengthOfLIS([0,1,0,3,2,3]))
// console.log(lengthOfLIS([7,7,7,7,7,7,7]))
// console.log(lengthOfLIS([4,10,4,3,8,9]))
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))