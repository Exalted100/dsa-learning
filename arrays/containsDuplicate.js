// https://leetcode.com/problems/contains-duplicate/description/

const containsDuplicate = (nums) => {
    let tempValues = {};
    for (let i = 0; i < nums.length; i++) {
        if ( tempValues[nums[i]]) {
            return true;
        } else {
            tempValues[nums[i]] = true;
        }
    }

    return false;
}

console.log(containsDuplicate([1,2,3,1]))