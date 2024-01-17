// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const combinedList = [];
    for (let i = 0, e = 0; i < list1.length || e < list2.length; null) {
        if (!list1[i] || list1[i] > list2[e]) {
            combinedList.push(list2[e])
            e++;
        } else {
            combinedList.push(list1[i]);
            i++;
        }
    }
    return combinedList;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));