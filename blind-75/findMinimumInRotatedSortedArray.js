// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lowestValue = nums[0];

    let pivot = Math.floor(nums.length) - 1;
    let lowerBound = 0;
    let upperBound = nums.length - 1;

    while (upperBound - lowerBound > 0) {
        pivot = (upperBound + lowerBound) % 2 === 0 ? (upperBound + lowerBound) / 2 :  Math.ceil((upperBound + lowerBound) / 2);

        if (nums[pivot] > nums[lowerBound]) {
            lowestValue = nums[lowerBound] < lowestValue ? nums[lowerBound] : lowestValue;
            lowerBound = pivot;
        } else if (pivot !== upperBound) {
            lowestValue = nums[pivot] < lowestValue ? nums[pivot] : lowestValue;
            upperBound = pivot;
        } else {
            lowestValue = nums[pivot] < lowestValue ? nums[pivot] : lowestValue;
            break;
        }
    }

    return lowestValue;
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))
console.log(findMin([1]))
console.log(findMin([1,2]))
console.log(findMin([2,3,4,5,1]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([5,1,2,3,4]))