/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
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
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

function middleNode(head: ListNode | null): ListNode | null {
    const simpleList: Array<ListNode> = [];
    while (head?.next) {
        simpleList.push(head.next)
        const {
            next, val
        } = head.next
        head = new ListNode(val, next)
    }
    const midlleIndex = (+Math.ceil(simpleList.length/2)) - 1
    return simpleList[midlleIndex] ?? head 
};
// @lc code=end

