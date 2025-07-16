/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists || lists.length <= 0) return null;
    let mainListNode: Array<ListNode> = []

    // Estratégia para criar um Array com todos os valores para posteriormente realizar o sorting
    lists.forEach((node) => {
        while (node) {
            mainListNode.push(node);
            node = node.next;
        }
    });

    // Possivelmente aqui poderia ter uma otimização utilizando estratégia de buble sort
    const sortedMainListNode = mainListNode.sort(
        (nodePrev, nodeNext) => nodePrev.val - nodeNext.val);
    
    if (sortedMainListNode?.length <= 0) return null;
    
    const sortedList = sortedMainListNode[0];

    for (let i = 1; i<sortedMainListNode.length; i++) {
        const previousNode = sortedMainListNode[i-1];
        previousNode.next = sortedMainListNode[i]
    }
    
    return sortedList;
};
// @lc code=end

