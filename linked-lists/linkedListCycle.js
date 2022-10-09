// https://leetcode.com/problems/linked-list-cycle/

const hasCylce = (head) => {

    let fast = head?.next?.next;
    let slow = head;

    while (slow) {
        if (slow === fast) return true;

        slow = slow.next;
        fast = fast?.next?.next;
    }

    return false;
}