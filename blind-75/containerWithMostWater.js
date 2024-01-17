// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
// TOO SLOW
// var maxArea = function(height) {
//     let maxContainer = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let e = i + 1; e < height.length; e++) {
//             const currentContainer = (e - i) * Math.min(height[i], height[e]);
//             maxContainer = currentContainer > maxContainer ? currentContainer : maxContainer;
//         }
//     }

//     return maxContainer;
// };

var maxArea = function(height) {
    let maxContainer = 0;

    for (let left = 0, right = height.length - 1; right > left; null) {
        const currentContainer = (right - left) * Math.min(height[left], height[right]);
        maxContainer = currentContainer > maxContainer ? currentContainer : maxContainer;

        if (Math.min(height[left], height[right]) === height[left]) {
            left++;
        } else {
            right--;
        }
    }

    return maxContainer;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))