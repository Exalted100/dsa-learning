// https://leetcode.com/problems/two-sum/description/

const twoSum = (nums, target) => {
    sortedNums = [...nums].sort(function(a, b){return a-b});

    let upperBoundIndex = nums.length - 1;
    let lowerBoundIndex = 0;
    let values = [];

    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[upperBoundIndex] + sortedNums[lowerBoundIndex] > target) {
            upperBoundIndex--;
        } else if (sortedNums[upperBoundIndex] + sortedNums[lowerBoundIndex] < target) {
            lowerBoundIndex++;
        } else {
            values = [sortedNums[lowerBoundIndex], sortedNums[upperBoundIndex]]
        }
    }
    return [nums.indexOf(values[0]), nums.lastIndexOf(values[1])]
}

// O(n log n) time complexity
console.log(twoSum([2, 7, 11, 15], 9))