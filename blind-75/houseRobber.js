// https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0, rob2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }

    return rob2;
};

console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))