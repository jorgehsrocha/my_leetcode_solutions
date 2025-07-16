/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    // if (!head || head === null) return null;

    let previousNode: ListNode | null = null;
    let current = head;

    while (current) {
        const nextNode = current.next;
        current.next = previousNode;

        previousNode = current;
        current = nextNode;
    }
    return previousNode;

};
// @lc code=end

