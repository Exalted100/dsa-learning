// https://leetcode.com/problems/reorder-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// It should be modified in place
// var reorderList = function(head) {
//     let firstCounter = 0;
//     let firstCursor = head;

//     while (firstCursor) {
//         firstCounter++;
//         firstCursor = firstCursor.next
//     }

//     let secondCounter = 0;
//     let secondCursor = head;
//     let reverseList = null;

//     while (secondCursor) {
//         if (firstCounter / secondCounter <= 2) {
//             reverseList = { val: secondCursor.val, next: reverseList };

//         };
//         secondCursor = secondCursor.next;
//         secondCounter++;
//     }

//     let thirdCounter = 1;
//     let isOdd = false;

//     let finalList = { val: head.val, next: null };
//     head = head.next;
//     let finalListCursor = finalList;

//     while (firstCounter / thirdCounter > 2 || reverseList) {
//         if (isOdd || !reverseList) {
//             finalListCursor.next = { val: head.val, next: null };
//             thirdCounter++;
//             isOdd = false;
//             finalListCursor = finalListCursor.next;
//             head = head.next;
//         } else {
//             finalListCursor.next = { val: reverseList.val, next: null };
//             isOdd = true;
//             finalListCursor = finalListCursor.next;
//             reverseList = reverseList.next;
//         }
//     }

//     return finalList;
// };

var reorderList = function (head) {
    if (head.next === null) {
        return head;
    }

  let firstCounter = 0;
  let firstCursor = head;

  while (firstCursor) {
    firstCounter++;
    firstCursor = firstCursor.next;
  }

  let secondCounter = 0;
  let secondCursor = head;
  let reverseList = null;

  while (secondCursor) {
    if (firstCounter / secondCounter <= 2) {
      reverseList = { val: secondCursor.val, next: reverseList };
    }
    secondCursor = secondCursor.next;
    secondCounter++;
  }

  let thirdCounter = 0;
  let headCursor = head;
  let preHeadCursor = null;

  while (reverseList) {
    let temp = headCursor.next;
    headCursor.next = { val: reverseList.val, next: temp };
    reverseList = reverseList.next;
    preHeadCursor = headCursor?.next;
    headCursor = headCursor.next.next;
    thirdCounter++;
  }

  preHeadCursor.next =
    firstCounter % 2 === 0 ? null : { val: headCursor.val, next: null };

  return head;
};

// console.log(
//   JSON.stringify(
//     reorderList({
//       val: 1,
//       next: {
//         val: 2,
//         next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
//       },
//     })
//   )
// );
// console.log(
//   JSON.stringify(
//     reorderList({
//       val: 1,
//       next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
//     })
//   )
// );
console.log(
    JSON.stringify(
      reorderList({
        val: 1,
        next: null,
      })
    )
  );
