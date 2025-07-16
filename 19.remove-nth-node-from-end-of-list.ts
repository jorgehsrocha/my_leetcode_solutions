/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;
    let currentNode = head;
    let steps = 0;
    while(currentNode) {
        currentNode = currentNode.next;
        steps++;
    }

    let indexToDelete = steps - n;
    
    if ( indexToDelete == 0 ) return head.next;
    
    currentNode = head;
    while(indexToDelete > 1) {
        currentNode = currentNode.next;
        indexToDelete--;
    }

    currentNode.next = currentNode.next.next;
    return head;
};
// @lc code=end

