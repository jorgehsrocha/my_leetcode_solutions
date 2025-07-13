/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const traversalOrder: number[][] = [];

    function getOrder(node: TreeNode | null, level: number) {
        if (!node||node===null) return;
        // traversal order not initialized yet
        if (!traversalOrder[level]) traversalOrder.push([]);
        
        traversalOrder[level].push(node.val);
        
        getOrder(node.left, level+1);
        getOrder(node.right, level+1);
    }

    getOrder(root, 0);
    return traversalOrder;
};
// @lc code=end

