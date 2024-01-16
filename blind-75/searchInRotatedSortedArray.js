/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let pivot = Math.floor((right + left) / 2);
  do {
    if (nums[pivot] === target || nums[left] == target || nums[right] === target) {
      const targetIndex = [nums[left], nums[pivot], nums[right]].indexOf(target);
      return targetIndex === 0 ? left : targetIndex === 1 ? pivot : right; 
    } else if (nums[pivot] > nums[left]) {
      if (target >= nums[left] && target <= nums[pivot]) {
        right = pivot;
      } else {
        left = pivot;
      }
    } else {
      if (target <= nums[right] && target >= nums[pivot]) {
        left = pivot;
      } else {
        right = pivot;
      }
    }
    pivot = Math.floor((right + left) / 2);
  } while (left !== pivot);

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1, 3], 3));
console.log(search([1, 3, 5], 1));
