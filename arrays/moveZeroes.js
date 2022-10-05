// https://leetcode.com/problems/move-zeroes/description/

const moveZeroesInPlace = (nums) => {
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            length--;
        }
    }
}

const moveZeroes = (nums) => {
    let arr = [];
    let numsOfZeroes = 0;

    for (let i = 0; i < nums.length; i++) nums[i] === 0 ? numsOfZeroes++ : arr.push(nums[i]);

    for (let i = 0; i < numsOfZeroes; i++) arr.push(0)

    return arr;
}

let nums = [0,1,0,3,12]
let nums2 = [0,0, 1]

moveZeroesInPlace(nums2)

console.log(nums2)