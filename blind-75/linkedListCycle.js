// https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head?.next?.next;

    while (slow) {
        if (slow === fast) {
            return true
        }

        slow = slow?.next;
        fast = fast?.next?.next
    }

    return false
};

console.log(hasCycle({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }))