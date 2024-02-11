// https://leetcode.com/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     let prev = null;
//     let next = null;

//     while (head) {
//         next = head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
    
//     return prev;
// };

var reverseList = function(head) {
    if (!head?.next) {
        return head
    }

    let first = head;
    let second = head.next;

    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    head.next = null;
    head = first;
    
    return head;
};

console.log(reverseList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5 } } } } }))