// https://leetcode.com/problems/merge-sorted-array/

const merge = (nums1, m, nums2, n) => {
    let firstNums = [...nums1];
    firstNums.length = m;
    let i = 0;
    let e = 0;

    for (let j = 0; j < m + n; j++) {
        if (firstNums[i] === undefined) {
            nums1[j] = nums2[e];
            e++;
        } else if (nums2[e] === undefined) {
            nums1[j] = firstNums[i];
            i++;
        } else if (firstNums[i] < nums2[e]) {
            nums1[j] = firstNums[i];
            i++;
        } else {
            nums1[j] = nums2[e];
            e++;
        }
    }
}

let n = [1,2,3,0,0,0]
let x = [1]
let y = [2, 0]

merge(n, 3, [2, 5, 6], 3)
merge(x, 1, [], 0)
merge(y, 1, [1], 1)

console.log(y)