/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
    if (!head?.next || head === null) return false;

    let cur = head.next;
    let prev = head;
    let next: ListNode | null;

    while (cur.next) {
        if (cur.next == head) return true;
        next = cur.next;
        cur.next = prev; 
        prev = cur; 
        cur = next;
    }
    return false;
};
// @lc code=end

