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
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) {
        return list1;
    }

  let firstListNext = list1;
  let secondListNext = list2;
  let mergedListHead;
  let mergedListCursor;
  if (!secondListNext || secondListNext?.val > firstListNext?.val) {
    mergedListHead = new ListNode(firstListNext.val);
    mergedListCursor = mergedListHead;
    firstListNext = firstListNext.next;
  } else {
    mergedListHead = new ListNode(secondListNext.val);
    mergedListCursor = mergedListHead;
    secondListNext = secondListNext.next;
  }

  while (firstListNext || secondListNext) {
    if (!secondListNext || secondListNext?.val > firstListNext?.val) {
      mergedListCursor.next = new ListNode(firstListNext.val);
      mergedListCursor = mergedListCursor?.next;
      firstListNext = firstListNext?.next;
    } else {
      mergedListCursor.next = new ListNode(secondListNext.val);
      mergedListCursor = mergedListCursor?.next;
      secondListNext = secondListNext?.next;
    }
  }

  return mergedListHead;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

console.log(
  mergeTwoLists(
    { val: 1, next: { val: 2, next: { val: 3, next: null } } },
    { val: 6, next: null }
  )
);
console.log(
    mergeTwoLists(
      { val: 1, next: { val: 2, next: { val: 4, next: null } } },
      { val: 1, next: { val: 3, next: { val: 4, next: null } } },
    )
  );
