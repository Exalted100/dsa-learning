// https://leetcode.com/problems/rotate-array/description/

// Space: O(1) Time: O(n^2)
const rotateInPlace = (nums, k) => {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums[nums.length - 1])
        nums.splice(nums.length - 1, 1)
    }

    return nums;
}

// Space: O(n) Time: O(n)
const rotate = (nums, k) => {
    let arr = [];

    for (i = 0, e = nums.length - 1; i < k; i++, e--) {
        if (e < 0) e = nums.length - 1;
        arr.push(nums[e])
    }

    arr.reverse()

    if (arr.length > nums.length) {
        arr.length = nums.length;
    } else if (arr.length < nums.length) {
        let i = 0;
        while (arr.length < nums.length) {
            arr.push(nums[i]);
            i++
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
    return nums;
}

// console.log(rotate([-1,-100,3,99], 2))
console.log(rotate([1, 2, 3], 4))