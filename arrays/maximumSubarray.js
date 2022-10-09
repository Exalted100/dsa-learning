// https://leetcode.com/problems/maximum-subarray/description/

// WRONG
const maxSubArray = (nums) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[1];

    let maxSum = 0;
    let upperBoundIndex = nums.length - 1;
    let lowerBoundIndex = 0;

    while (lowerBoundIndex < upperBoundIndex) {
        let tempSum = 0;
        for (let i = lowerBoundIndex; i <= upperBoundIndex; i++) {
            tempSum += nums[i];
        }
        if (tempSum > maxSum) maxSum = tempSum;
        tempSum = 0;

        nums[lowerBoundIndex + 1] > nums[upperBoundIndex - 1] ? lowerBoundIndex++ : upperBoundIndex--;
    }

    return maxSum
}

const maxSubArrayBrute = (nums) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[1];

    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let tempSum = 0;
        for (let e = i; e < nums.length; e++) {
            tempSum += nums[e];
        }
        if (tempSum > maxSum) maxSum = tempSum;
    }

    return maxSum;
}

console.log(maxSubArrayBrute([-2,1,-3,4,-1,2,1,-5,4]))