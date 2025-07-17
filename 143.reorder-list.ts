/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const list: Array<ListNode> = [];
    let curr = head;
    while(curr) {
        list.push(curr);
        curr = curr.next;
    }
    curr = list[0];
    
    let i = 0;
    for(let i = 0; i<Math.floor(list.length/2); i++) {
        if (curr) curr.next = list[i];
        curr = list[i]
        curr.next = list[list.length-i-1];
        curr = curr.next;
    }

    if (list.length%2 === 0) {
        curr.next = null;
    } else {
        curr.next = list[Math.floor(list.length/2)];
        curr.next.next = null;
    }
};
// @lc code=end

