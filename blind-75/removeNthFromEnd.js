// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let counter = 0,
    headCursor = head;

  while (headCursor) {
    counter++;
    headCursor = headCursor.next;
  }

  if (counter - n === 0) {
    head = head.next;
  } else {
    let finalCursor = head;
    let secondCounter = 0;
    let nodePosition = counter - n;

    while (finalCursor) {
      secondCounter++;

      if (secondCounter === nodePosition) {
        finalCursor.next = finalCursor.next.next;
      }
      finalCursor = finalCursor.next;
    }
  }

  return head;
};

console.log(
  removeNthFromEnd(
    {
      val: 1,
      next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5 } } } },
    },
    2
  )
);
console.log(removeNthFromEnd({ val: 1, next: null }, 1));
console.log(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 2));
